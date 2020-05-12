'use strict';
const {promisify} = require('util');
const path = require('path');
const cp = require('child_process');

const pExecFile = promisify(execFile);

// Binary source: https://github.com/sindresorhus/recycle-bin
const binary = path.join(__dirname, 'windows-trash.exe');

module.exports = async paths => {
	cp.execSync(`"${binary}" "${paths})"`);
};
