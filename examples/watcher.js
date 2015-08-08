#!/usr/bin/env node

// This is an example file of wlog usage

// If used as npm dependency, require "wlog" instead
var wlog = require('../lib/fileops.js')

// Watch test.txt file (temporary test)
wlog.watch(__dirname + "/../test/test.txt")

