import mockService from 'maxilo-vue/lib/core/mocks/utils';

let service = new mockService;

let mocks = require('./.mock');

Object.keys(mocks).forEach((k) => {
    let build = 'resolve';
    let v     = mocks[k];
    if(v.reg) {
        build = 'resolveREG';
    }
    service[build](k, v.build, v.type, v.title);
});
service.resolveRap(require('./.rap.json'));
let raps = require('./.rap.json');
console.log(raps);