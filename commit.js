const spawnSync = require('child_process').spawnSync

spawnSync('git config --global user.email "macchenjl@foxmail.com"')
spawnSync('git config --global user.name "MZI"')
spawnSync('git commit -am "main.js updated at $(date -R)"')
spawnSync('git push origin gh-pages')
