#!/usr/bin/env node
const fs = require('fs');
const fileName = './package.json';
const file = require(fileName);

const [,, ...args] = process.argv
const defaultScriptType = 'playground';
const scriptType = args[0] === 'react-lib' || args[0] === 'playground' ? args[0] : defaultScriptType;

const targetLibArr = ["react", "react-dom"];

let from = "peerDependencies";
let to = "devDependencies";

if(scriptType === 'react-lib')
{
	from = "devDependencies";
	to = "peerDependencies";
}

let source = !file[from] ? {} : file[from];
let target = !file[to] ? {} : file[to];
let newSource = {};

Object.keys(source).forEach(key => 
{
	if (!(targetLibArr.indexOf(key) !== -1))
	{
	    newSource[key] = source[key];
	}
	else
	{
	 target[key] = source[key];
	}
});

if(JSON.stringify(source) === JSON.stringify(newSource)){
	console.log("[SUCCESS] package.json was already set up. No further configurations needed.");
	return;
}

file[from] = newSource;
file[to] = target;

fs.writeFile(fileName, JSON.stringify(file,null, 2), (err) => 
{
  if (err) return console.log(err);
  console.log("[SUCCESS] Package.json set up.");
});


