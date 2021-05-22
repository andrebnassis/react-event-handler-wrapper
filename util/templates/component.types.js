module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export interface I${componentName} {
    foo: string;
}
`,
  extension: `.types.ts`
});
