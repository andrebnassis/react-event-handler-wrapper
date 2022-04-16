import React, { createRef, useEffect, useState } from 'react';
import { useOutClickEventWrapper } from './hook/useOutClickEventWrapper';

const OutClickEventWrapper: React.FC<{ outClickCallback: any; children:React.ReactNode }> = (props) => {
  
  const [elRefs, setElRefs] = useState<any>([]);
  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs:any) => (
      Array(React.Children.toArray(props.children).length).fill(undefined).map((_, i) => elRefs[i] || createRef())
    ));
  }, [props.children]);

  const outsideClick = useOutClickEventWrapper(elRefs);

  useEffect(() => {
    props.outClickCallback(outsideClick);
  }, [outsideClick,props]);

  return <>{React.Children.map(props.children, (child, index)  => {
    if(child){
      return React.cloneElement(child as any, {ref: elRefs[index]});
    }
    })}
      </>
    
};

export default OutClickEventWrapper;