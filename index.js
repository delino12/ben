#!/usr/bin/env node

var programmer = require('commander');
var repository = require('./src/ben').repository;
var status = require('./src/ben').status;

programmer.version('1.0.0').description('Welcome to Ben git helper');
programmer.command('which repo').alias('wr').description('track changes').action(() => {
	repository();
});

programmer.command('show status').alias('ss').description('track changes').action(() => {
	status();
});

programmer.parse(process.argv);
