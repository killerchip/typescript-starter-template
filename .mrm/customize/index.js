module.exports = function task({ name }) {
    const { json } = require('mrm-core');
    const file = json('package.json');
    file.set('name', name);
    file.set('repository', '');
    file.set('author', '');
    file.set('description', '');
    file.save();
};

module.exports.parameters = {
    name: {
        // input, number, confirm, list, rawlist, expand, checkbox, password, editor
        type: 'input',
        message: 'New name for the project',
    },
};
module.exports.description = 'Customize project package.json name';
