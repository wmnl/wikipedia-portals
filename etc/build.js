const LANGUAGES = require('./languages.json');
const fs = require('fs').promises;
const handlebars = require('handlebars');
const pathlib = require('path');

function path(file) {
    const dirname = pathlib.dirname(__filename);
    return pathlib.resolve(dirname, file);
}

async function readFile(file) {
    return await fs.readFile(path(file), 'utf-8');
}

async function build(version) {
    const sourceHtml = await readFile('../template.html');
    const template = handlebars.compile(sourceHtml);

    const html = template({
        css : await readFile('../css/style.css'),
        isBe : version === 'be',
        isNl : version === 'nl',
        js : await readFile('../js/app.js'),
        languages : LANGUAGES,
        version : version
    });

    const outpath = path(`../build/index-${version}.html`);
    fs.writeFile(outpath, html);
    console.log(`Written ${outpath}`);
}

build('be');
build('nl');