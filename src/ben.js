var exec = require('child_process').exec;
var colors = require('colors');

var repository = () => {
	exec('git remote -v', (error, stdout, stderr) => {
	    console.info(`Here is what i found!: \n ${stdout}`);
	    if(stderr){
	    	console.warn(`stderr: ${stderr}`);
	    }
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }
	});
}

var status = () => {
	exec('git status', (error, stdout, stderr) => {
	    console.log(`${stdout}`);
	    if(stderr){
	    	console.warn(`stderr: ${stderr}`);
	    }
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }
	});
}

var greet = () => {
	console.info(`Hi there, I'm ${colors.grey('Ben')} i can help you perform some cool friendly git command task, to get started type: ${colors.grey('Ben --help')}`);
}

var commit = (message) => {
	exec(`git add . && git commit -m "${message}"`, (error, stdout, stderr) => {
	    console.log(`tracking....`);
	    if(stdout){
	    	console.log(stdout);
	    }
	    if(stderr){
	    	console.warn(`stderr: ${stderr}`);
	    }
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }
	});
}

module.exports = {repository, status, commit, greet};