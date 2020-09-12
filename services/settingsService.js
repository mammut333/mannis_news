const fs = require('fs');

const readSettings = () => {
    try {
    return JSON.parse(fs.readFileSync('settings.json'));
    } catch(err) {
        return {};
    }
};

const writeSettings = data => {
    fs.writeFileSync('settings.json', JSON.stringify(data));
}

module.exports = {
    readSettings,
    writeSettings
};