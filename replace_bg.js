import fs from 'fs';
import path from 'path';

const replaceInFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/bg-brand-blue/g, 'bg-brand-dark');
      content = content.replace(/text-brand-blue/g, 'text-brand-dark');
      fs.writeFileSync(fullPath, content);
    }
  }
};

replaceInFiles('./components');
replaceInFiles('./');
console.log('Done replacing backgrounds.');
