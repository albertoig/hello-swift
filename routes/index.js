var express = require('express');
var router = express.Router();
const exec = require('child_process').exec

router.get('/', function(request, response, next) {
    exec('swift ./swifthello.swift', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        response.status(200).send(stdout)
    })
});

module.exports = router
