#!/usr/bin/env node
var inquirer = require('inquirer');
var programmer 	= require('commander');
var repository 	= require('./src/ben').repository;
var status 		= require('./src/ben').status;
var greet 		= require('./src/ben').greet;
var commit      = require('./src/ben').commit;
var push      = require('./src/ben').push;

programmer.version('1.0.0').description('Welcome to Ben git helper');
programmer.command('hello').alias('hi').description('Greetings').action(() => {
	greet();
});

programmer.command('which repo').alias('wr').description('Show the current repository you are working on').action(() => {
	repository();
});

programmer.command('show status').alias('ss').description('Show project status and changes').action(() => {
	status();
});

programmer.command('save this').alias('st').description('Track changes and request commit message').action(() => {
	// commit();
	inquirer.prompt([{
		type: 'input',
		name: 'message',
		message: 'What will you like to call this change?'
	}]).then(function (answers) {
        // console.log(answers);
        commit(answers.message);
    })
});

programmer.command('push').alias('p').description('Push changes to repository!').action(() => {
	// commit();
    push();
});

programmer.parse(process.argv);
