#!/usr/bin/env node

// This is an example file of wlog usage

// If used as npm dependency, require "wlog" instead
var wlog = require('../lib/logger.js')

wlog.warn("This is a warning with default tag")

wlog.tag("TEST")
wlog.warn("This is a warning with [TEST] tag before debug backtrace")
wlog.debug()
wlog.note("This is a note after debug backgrace")

wlog.err("This is an error message and will exit")

console.log("This will not be executed")

