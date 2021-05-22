module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
  import React from "react";
  import { StyledDiv } from "./styled/StyledDiv";
  import { I${componentName} } from "./interface/I${componentName}";
  
  const ${componentName}: React.FC<I${componentName}> = ({ foo }) => (
      <StyledDiv data-testid="${componentName}">{foo}</StyledDiv>
  );
  
  export default ${componentName};
`,
  extension: `.tsx`
});
