#!/usr/bin/env node
const fs = require('fs');
const package = require('./package.json');

const { exec } = require('child_process');
const { exit } = require('process');

  exec("git -c 'versionsort.suffix=-' ls-remote --exit-code --refs --sort='version:refname' --tags https://github.com/andrebnassis/react-event-handler-wrapper 'v*.*.*'     | tail --lines=1 | cut --delimiter='/' --fields=3", (error, stdout) => {
    let currentVersion = package.version;

    if (error) {
      console.error(`exec error: ${error}`);
      exit(-1);
    }

	
  if(!stdout.trim()){
    console.error(`No tag found`);
    exit(-1);
  }
  const pattern = /\d\.\d\.\d/gm;
  let newVersion = stdout.trim().match(pattern)[0];
  package.version = newVersion;
  fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
  console.log('Version updated', currentVersion, '=>', newVersion);
  });
