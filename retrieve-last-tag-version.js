#!/usr/bin/env node
const fs = require('fs');
const package = require('./package.json');

const { exec, execSync } = require('child_process');
const { exit } = require('process');

let currentVersion = package.version;

  exec("git -c 'versionsort.suffix=-' ls-remote --exit-code --refs --sort='version:refname' --tags git@github.com:andrebnassis/react-event-handler-wrapper.git 'v*.*.*.*'     | tail --lines=1 | cut --delimiter='/' --fields=3", (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      exit(-1);
    }

	
  if(!stdout.trim()){
    console.error(`No tag found`);
    exit(-1);
  }

  console.log(test);
    // let newVersion = stdout.trim();
    // package.version = newVersion;
    // fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));

    // execSync("git commit -am 'Bump version '" + newVersion);

    // console.log('Version updated', currentVersion, '=>', newVersion);
  });
