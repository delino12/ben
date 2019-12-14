var exec = require('child_process').exec;
var inquirer = require('inquirer');
var colors = require('colors');

var repository = () => {
	exec('git remote -v', (error, stdout, stderr) => {
	    console.log(`stdout: ${stdout}`);
	    console.warn(`stderr: ${stderr}`);
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }
	});
}

var status = () => {
	exec('git status', (error, stdout, stderr) => {
	    console.log(`stdout: ${stdout}`);
	    console.warn(`stderr: ${stderr}`);
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }
	});
}

module.exports = {repository, status};