const gpuInfo = require('gpu-info');
gpuInfo().then(function(data) {
    data.forEach(element => {
        console.log(element.AdapterCompatibility, element.Name)
    });
});
