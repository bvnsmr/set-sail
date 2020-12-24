#!/usr/bin/env node
const inquirer = require('inquirer');

const frameworksList = require('./frameworks/frameworksList').frameworksList;

const askQuestions = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'App Name:',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Which framework would you like to use?',
      choices: ['react', 'next'],
    },
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  const answers = await askQuestions();
  const { name, framework } = answers;

  const app = frameworksList[framework];

  if (!app) {
    console.log(`${framework} is not yet supported`);
    return process.exit(0);
  }

  const directory = `${process.cwd()}/${name}`;
  const res = await app.create(name, directory);
  if (!res) {
    console.log('Error creating app');
    process.exit(0);
  }

  return process.exit(0);
};

run();
