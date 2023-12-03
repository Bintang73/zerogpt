const ZeroGpt = require('zerogpt')

const ZeroGpts = new ZeroGpt();

ZeroGpts.score('HALO AKU MAU SATU')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
