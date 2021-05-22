require("colors");
const fs = require("fs");
const templates = require("./templates");
const packageJson = require("../package.json");
const {parseToKebabCase, parseToPascalCase} = require("./service/stringUtils")

const input = process.argv[2];

if (!input) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

const packageName = packageJson.name ? packageJson.name.substring(packageJson.name.indexOf('/') + 1).trim() : "";

const componentName = parseToPascalCase(input);
const componentFolderName = parseToKebabCase(componentName);
const rootFolderName = parseToKebabCase(packageName || "lib");

const playgroudRootFolder = "stories";
const testRootFolder = "test";

const componentRootFolderDirectory = `./src/${rootFolderName}`;
const componentDirectory = `${componentRootFolderDirectory}/${componentFolderName}`;
const playgroundDirectory = `./src/${playgroudRootFolder}/${componentFolderName}`;
const testDirectory = `./src/${testRootFolder}/${componentFolderName}`;

if(!fs.existsSync(componentRootFolderDirectory)){
  fs.mkdirSync(componentRootFolderDirectory);
}

if (fs.existsSync(componentDirectory) || fs.existsSync(playgroundDirectory) || fs.existsSync(testDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

fs.mkdirSync(componentDirectory);
fs.mkdirSync(`${componentDirectory}/interface`);
fs.mkdirSync(`${componentDirectory}/styled`);
fs.mkdirSync(playgroundDirectory);
fs.mkdirSync(testDirectory);

const generatedTemplates = templates.map((template) => template(componentName,componentFolderName,rootFolderName));

generatedTemplates.forEach((template) => {
  if(template.extension === ".stories.tsx"){
    fs.writeFileSync(
      `${playgroundDirectory}/${componentName}${template.extension}`,
      template.content
    );
  }
  else if(template.extension === ".test.tsx"){
    fs.writeFileSync(
      `${testDirectory}/${componentName}${template.extension}`,
      template.content
    );
  }
  else if(template.extension === ".ts"){
    fs.writeFileSync(
      `${componentDirectory}/index${template.extension}`,
      template.content
    );
  }
  else if(template.extension === ".types.ts"){
    fs.writeFileSync(
      `${componentDirectory}/interface/I${componentName}.ts`,
      template.content
    );
  }
  else if(template.extension === ".styled.tsx"){
    fs.writeFileSync(
      `${componentDirectory}/styled/StyledDiv.tsx`,
      template.content
    );
  }
  else{
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
}
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);
