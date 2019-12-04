const fs = require('fs').promises;

function copyFile(src, dest) {
    return fs.readFile(src, 'utf8')
        .then(contents => {
            fs.writeFile(dest, contents);
        });
}

copyFile('./colors.js', './colors-copy.js');