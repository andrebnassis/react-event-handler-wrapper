// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import { action }  from "@storybook/addon-actions"
import OutClickEventWrapper from '../../react-event-handler-wrapper/out-click-event-wrapper/OutClickEventWrapper'
import MySample from "../../resource/my-sample/MySample";

export default {
  title: "OutClickEventWrapper",
  component: OutClickEventWrapper
} as Meta;

const Template:Story<any> = (props) => {
return (
  <OutClickEventWrapper outClickCallback={action("callback")}>
    <div style={{backgroundColor: "#111169", textAlign:"center"}}>
    {props.children}
    </div>
  </OutClickEventWrapper>
)
  
}

export const OutClickEvent = Template.bind({});
OutClickEvent.args = {
  children:<MySample foo={"click inside or outside this 'div' and see the result on 'Actions' tab"}/>
}
