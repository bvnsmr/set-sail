const shell = require('shelljs');
const chalk = require('chalk');
const config = require('./reactTailwindConfig');
const {
  installDependencies,
  updatePackageScripts,
  addTemplates,
} = require('../../utils');

const createReactApp = (name) => {
  return new Promise((resolve, reject) => {
    shell.exec(`npx create-react-app ${name}`, () => {
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
  await createReactApp(name);
  await installDependencies(config.dependencies, config.devDependencies);
  await updatePackageScripts(config.scripts);
  await addTemplates(config.templates);
  return true;
};
