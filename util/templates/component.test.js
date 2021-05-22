module.exports = (componentName,componentFolderName,componentRootFolderName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "../../${componentRootFolderName}/${componentFolderName}/${componentName}";
import { I${componentName} } from "../../${componentRootFolderName}/${componentFolderName}/interface/I${componentName}";

describe("Test Component", () => {
  let props: I${componentName};

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "hello world";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("hello world");
  });
});
`,
  extension: `.test.tsx`
});
