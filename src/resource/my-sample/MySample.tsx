// Generated with util/create-component.js
  import React from "react";
  import { StyledDiv } from "./styled/StyledDiv";
  import { IMySample } from "./interface/IMySample";
  
  const MySample: React.FC<IMySample> = ({ foo }) => (
      <StyledDiv data-testid="MySample">{foo}</StyledDiv>
  );
  
  export default MySample;
