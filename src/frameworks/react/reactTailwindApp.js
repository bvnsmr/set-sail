const shell = require('shelljs');
const fse = require('fs-extra');
const chalk = require('chalk');
const config = require('./reactTailwindConfig');

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

const installDependencies = async (dependencies, devDependencies) => {
  await new Promise((resolve) => {
    console.log('Installing tailwind dependencies...');
    shell.exec(`yarn add ${dependencies.join(' ')}`, () => {
      resolve();
    });
  });

  await new Promise((resolve) => {
    console.log('Installing tailwind dev dependencies...');
    shell.exec(`yarn add --dev ${devDependencies.join(' ')}`, () => {
      resolve();
    });
  });
};

const updatePackageScripts = async (scripts) => {
  console.log('Updating package scripts...');
  return new Promise((resolve) => {
    const basePackage = JSON.parse(fse.readFileSync('package.json'));

    scripts.forEach((script) => {
      basePackage.scripts[script.key] = script.value;
    });

    fse.writeFile(
      'package.json',
      JSON.stringify(basePackage, null, 2),
      function (err) {
        if (err) {
          return console.log(err);
        }

        console.log('Scripts updated');
        resolve();
      },
    );
  });
};

exports.create = async (name, directory) => {
  await createReactApp(name);
  await installDependencies(config.dependencies, config.devDependencies);
  await updatePackageScripts(config.scripts);
  console.log('react', name, directory);
  return true;
};
