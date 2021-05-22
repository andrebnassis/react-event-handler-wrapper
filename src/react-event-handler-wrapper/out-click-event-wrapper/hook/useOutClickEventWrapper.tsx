import { useState, useEffect } from 'react';

export const useOutClickEventWrapper = (refArr: Array<any>) => {
  const [outsideClick, setOutsideClick] = useState<boolean | undefined>();

  useEffect(() => {
    function handleClickOutside(event: any) {
      let eventPath = event.path || event.composedPath();
      let clickedOutsideArr = refArr.map(ref => {
        
        //if outclick, return true
        return (ref.current && (!eventPath.includes(ref.current)));
      })

      //if any of the components passed has a click inside, then outclick is false, otherwise outclick occur.
      clickedOutsideArr.includes(false) ? setOutsideClick(false) : setOutsideClick(true);
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refArr]);

  return outsideClick;
};