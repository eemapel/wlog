// logger.js
var exports = module.exports = {}

var colors = require('colors')
var stack = require('callsite')

var tag = "[WLOG] "

var backtrace = function(mode) {
    var bt = stack()
    bt.forEach(function(site, index) {
        switch (mode) {
            case "warning":
                if (index > 2) return
            case "error":
                if (index > 1) {
                    var msg = site.getFunctionName() || 'anonymous ' + site.getFileName() + ":" + site.getLineNumber()
                    console.log("    " + msg.yellow)
                }
                break
            default:
                console.error("[WLOG] undefined backtrace mode".red)
                process.exit(1)
                break;
        }
    })
}

exports.err = function(msg) {
    if (!msg) msg = ""
    console.error(tag.red + "Error: " + msg)
    console.log("[".red)
    backtrace("error")
    console.log("]".red)
    console.log("")
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
    console.log("[".yellow)
    backtrace("warning")
    console.log("]".yellow)
    console.log("")
}

