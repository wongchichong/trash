'use strict';
const path = require('path');
const cp = require('child_process');

// Binary source: https://github.com/sindresorhus/recycle-bin
const binary = path.join(__dirname, 'windows-trash.exe');

module.exports = async paths => {
	cp.execSync(`"${binary}" "${paths}"`);
};
