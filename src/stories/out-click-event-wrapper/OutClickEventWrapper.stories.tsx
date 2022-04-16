import React from "react";
import { Story } from "@storybook/react";
import OutClickEventWrapper from '../../react-event-handler-wrapper/out-click-event-wrapper/OutClickEventWrapper'


export const OutClickEvent:Story = () => {

const [clickedOutside, setClickedOutside] = React.useState<boolean|undefined>(undefined);
return (
  <>
  <OutClickEventWrapper outClickCallback={(value:boolean) => setClickedOutside(value)}>
    <div style={{
      color: 'green', 
      fontSize: '32px', 
      backgroundColor: "#111169", 
      textAlign:"center"
    }} >
          Click inside and outside this div to see the result
      </div>
  </OutClickEventWrapper>
  <p>Clicked Outside: {JSON.stringify(clickedOutside)}</p>
  </>
)
  
}