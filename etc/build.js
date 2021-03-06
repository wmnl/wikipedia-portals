const DATA = require('./data.json');
const fs = require('fs').promises;
const handlebars = require('handlebars');
const pathlib = require('path');
const uglify = require('uglify-js');

function path(file) {
    const dirname = pathlib.dirname(__filename);
    return pathlib.resolve(dirname, file);
}

async function readFile(file) {
    return await fs.readFile(path(file), 'utf-8');
}

async function getJs() {
    const js = await readFile('../js/app.js');
    return uglify.minify(js).code;
}

function getLanguages(version) {
    return DATA.languages[version].map((code) => {
        return {
            code : code,
            label : DATA.allLanguages[code]
        };
    });
}

async function build(version) {
    const sourceHtml = await readFile('../template.html');
    const template = handlebars.compile(sourceHtml);

    const html = template({
        allLanguages : DATA.allLanguages,
        css : await readFile('../css/style.css'),
        isBe : version === 'be',
        isNl : version === 'nl',
        js : await getJs(),
        languages : getLanguages(version),
        version : version
    });

    const outpath = path(`../build/${version}/index.html`);
    fs.writeFile(outpath, html);
    console.log(`Written ${outpath}`);
}

build('be');
build('nl');