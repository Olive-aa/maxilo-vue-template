import mockService from 'maxilo-vue/lib/core/mocks/utils';
import mocks from './.mock';
import raps from './.rap.json';
console.log(raps);
let service = new mockService;

Object.keys(mocks).forEach((k) => {
    let build = 'resolve';
    let v     = mocks[k];
    if(v.reg) {
        build = 'resolveREG';
    }
    service[build](k, v.build, v.type, v.title);
});
service.resolveRap(raps.data);
service.run();