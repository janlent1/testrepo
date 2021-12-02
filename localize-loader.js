const dedent = require('dedent-js')
module.exports = function(content, sourceMap) {
        var callback = this.async();
    var content =
        dedent`
        module.exports = function(){return {a:1}};
        `
        callback(null, content);
}

