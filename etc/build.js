const fs = require('fs').promises;
const handlebars = require('handlebars');
const pathlib = require('path');

function path(file) {
    const dirname = pathlib.dirname(__filename);
    return pathlib.resolve(dirname, file);
}

async function build(version) {
    const sourceHtml = await fs.readFile(path('../template.html'), 'utf-8');
    const template = handlebars.compile(sourceHtml);

    const html = template({
        version
    });

    const outpath = path(`../build/index-${version}.html`);
    fs.writeFile(outpath, html);
    console.log(`Written ${outpath}`);
}

build('be');
build('nl');