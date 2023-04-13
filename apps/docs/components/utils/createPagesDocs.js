const glob = require('glob');
const { docsSplit, removePart, saveDoc, updateFrontmatter } = require('./utils');
const fs = require('fs');
const commandLineArgs = require('command-line-args');

const options = commandLineArgs([{ name: 'event' }, { name: 'path' }]);

const mdFiles = glob.sync('./pages/*.md');

function generateDocs() {
  if (options.event === 'change') {
    let docsContent = fs.readFileSync(options.path, 'utf8');
    const reactDocContent = updateFrontmatter(removePart(docsContent, 'vue'), options.path, 'pages');
    const vueDocContent = updateFrontmatter(removePart(docsContent, 'react'), options.path, 'pages');

    saveDoc(`./react/${options.path}`, reactDocContent);
    saveDoc(`./vue/${options.path}`, vueDocContent);
  } else {
    docsSplit(mdFiles, 'pages');
  }
}

module.exports = {
  generateDocs,
};

if (require.main === module) {
  generateDocs();
}
