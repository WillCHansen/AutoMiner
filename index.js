const gpuInfo = require('gpu-info');
gpuInfo().then(function(data) {
    // data.forEach(element => {
    //     console.log(element.AdapterCompatibility, element.Name)
    // });
    console.log(data)
});

const request = require('request');
const fs = require('fs');

request.get('https://github.com/KlausT/ccminer/releases/download/8.20/ccminer-820-cuda91-x64.zip').pipe(fs.createWriteStream('ccminer-820-cuda91-x64.zip'));