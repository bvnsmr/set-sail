const shell = require('shelljs');
const fse = require('fs-extra');

const installDependencies = async (dependencies, devDependencies) => {
  await new Promise((resolve) => {
    console.log('Installing tailwind dependencies...');
    shell.exec(`npm install ${dependencies.join(' ')} --save`, () => {
      resolve();
    });
  });

  await new Promise((resolve) => {
    console.log('Installing tailwind dev dependencies...');
    shell.exec(`npm install ${devDependencies.join(' ')}  --save-dev`, () => {
      resolve();
    });
  });
};

const updatePackageScripts = async (scripts) => {
  console.log('Updating package scripts...');
  if (scripts.length < 1) {
    return true;
  }
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
      }
    );
  });
};

const addTemplates = (templates) => {
  return new Promise((resolve) => {
    templates.forEach((template) => {
      fse.outputFileSync(template.path, template.file);
    });

    resolve();
  });
};

module.exports = {
  installDependencies,
  updatePackageScripts,
  addTemplates,
};
