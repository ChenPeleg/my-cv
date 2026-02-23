import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const yamlFilePath = path.resolve('cv.yaml');
const jsFilePath = path.resolve('src/cvData.ts');

try {
  const fileContents = fs.readFileSync(yamlFilePath, 'utf8');
  const data = yaml.load(fileContents);

  const jsContent = `// This file is auto-generated from cv.yaml. Do not edit directly.
export const cvData = ${JSON.stringify(data, null, 2)};
`;

  fs.writeFileSync(jsFilePath, jsContent);
  console.log(`Successfully converted ${yamlFilePath} to ${jsFilePath}`);
} catch (e) {
  console.error('Error converting YAML to JS:', e);
  process.exit(1);
}
