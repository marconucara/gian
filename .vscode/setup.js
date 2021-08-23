const fs = require('fs');
const path = require('path');

/**
 * Setup all template files from the .vscode folder
 * This speeds up the initial setup of the VSCODE IDE
 */
const setupTemplateFiles = () => {
  const pathVscode = './.vscode/';
  const files = fs.readdirSync(pathVscode);
  files.map(file => {
    const fileSource = file.toString();
    const fileSourcePath = path.join(pathVscode, fileSource);

    const isTemplate = fileSource.endsWith('.template.json');

    const fileCreated = fileSource.replace('.template.json', '.json');
    const fileCreatedPath = path.join(pathVscode, fileCreated);

    if (isTemplate && !fs.existsSync(fileCreatedPath)) {
      fs.copyFileSync(fileSourcePath, fileCreatedPath);
    }
  });
};

setupTemplateFiles();
