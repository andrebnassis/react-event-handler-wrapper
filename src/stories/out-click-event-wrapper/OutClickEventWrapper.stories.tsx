import React from "react";
import { Story, Meta } from "@storybook/react";
import { action }  from "@storybook/addon-actions"
import OutClickEventWrapper from '../../react-event-handler-wrapper/out-click-event-wrapper/OutClickEventWrapper'


export default {
  title: "OutClickEventWrapper",
  component: OutClickEventWrapper,
  parameters:{
    controls:{
      disabled: true
    },
  }
} as Meta;

export const OutClickEvent:Story = () => {
return (
  <OutClickEventWrapper outClickCallback={action("callback")}>
    <div style={{color: 'green', fontSize: '32px', backgroundColor: "#111169", textAlign:"center"}} >click inside or outside this 'div' and see the result on 'Actions' tab</div>
  </OutClickEventWrapper>
)
  
}