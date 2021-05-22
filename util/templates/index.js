const component = require("./component");
const componentIndex = require("./component_index");
const componentStyled = require("./component_styled");
const componentTypes = require("./component.types");
const componentStories = require("./component.stories");
const componentTests = require("./component.test");

module.exports = [
  component,
  componentIndex,
  componentTypes,
  componentStories,
  componentTests,
  componentStyled
];
