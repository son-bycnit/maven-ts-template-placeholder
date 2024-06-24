const fs = require('fs');

const LAYOUT_FILE = 'src/default-layout.component.html';
const PLACEHOLDER = 'RELEASE_VERSION_AND_DATE';

const args = process.argv.slice(2);


fs.readFile(LAYOUT_FILE, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading layout file: ' + err);
        return;
    }
    var version = args[0];
    var releaseDate = args[1];
    var content = data.replace(PLACEHOLDER, `version: ${version} - ${releaseDate}`);
    fs.writeFile(LAYOUT_FILE, content, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});