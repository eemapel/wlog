// logger.js
var exports = module.exports = {}

var fs = require('fs')
var logger = require('./logger.js')

// Watch a file for changes
exports.watch = function(file) {
    // Check that file exists
    fs.stat(file, function(err) {
        if (err) {
            logger.err("File not found: " + file) 
        }
        logger.note("File found")
    })
}

