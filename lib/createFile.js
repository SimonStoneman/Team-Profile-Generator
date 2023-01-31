const fs = require('fs').promises;

function createFile(path, filename, data) {

    // Make the directory structure for output file using promise from return call
    return fs.mkdir(path, {recursive: true})
    .then (() => {
         // Write to file in the directory structure created before using promise from return call
        return fs.writeFile(filename, data)
        .then(() => {
            console.log(`You have sccessfully created ${filename} `);
            console.log(`The contents of the file is:\n${data}`);
        });
    });

}

module.exports = createFile;