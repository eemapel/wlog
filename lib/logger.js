// logger.js
var exports = module.exports = {}

var colors = require('colors')

var tag = "[WLOG] "

exports.err = function(msg) {
    if (!msg) msg = ""
    console.log(tag.red + "Error: " + msg)

    // Exit with non-zero return value
    process.exit(1)
}

exports.note = function(msg) {
    if (!msg) msg = ""
    console.log(tag.green + msg)
}

exports.tag = function(txt) {
    // Only if txt set
    if (txt !== undefined) {
        tag = "[" + txt + "] "
    }
}

exports.warn = function(msg) {
    if (!msg) msg = ""
    console.log(tag.yellow + "Warning: " + msg)
}

