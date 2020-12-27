const shell = require('shelljs');
const chalk = require('chalk');
const config = require('./nextTailwindConfig');
const {
  installDependencies,
  updatePackageScripts,
  addTemplates,
} = require('../../utils');

const createNextApp = (name) => {
  return new Promise((resolve, reject) => {
    shell.exec(`npx create-next-app ${name}`, () => {
      const cdResult = shell.cd(name);

      if (cdResult.code !== 0) {
        console.log(chalk.red(`Error changing directory to: ${name}`));
        reject();
      }
      resolve();
    });
  });
};

exports.create = async (name) => {
  await createNextApp(name);
  await installDependencies(config.dependencies, config.devDependencies);
  await updatePackageScripts(config.scripts);
  await addTemplates(config.templates);
  return true;
};
