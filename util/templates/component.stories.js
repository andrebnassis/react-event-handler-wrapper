module.exports = (componentName,componentFolderName, componentRootFolderName) => ({
  content: `// Generated with util/create-component.js
  import React from "react";
  import { Story, Meta } from "@storybook/react";
  import ${componentName} from "../../${componentRootFolderName}/${componentFolderName}/${componentName}";
  
  export default {
    title: "${componentName}",
    component: ${componentName}
  } as Meta;
  
  const Template:Story<any> = (props) => <${componentName} {...props} />
  
  export const Component = Template.bind({});
  Component.args = {
    foo:"bar"
  }
`,
  extension: `.stories.tsx`
});
