let build = require('maxilo-vue/build');
let buildInstance = new build;
let utils = require('maxilo-vue/build/utils');

buildInstance.resolve({
    assets: utils.resolve('src/assets'),
    components: utils.resolve('src/component'),
    vendor: utils.resolve('src/vendor'),
    config: utils.resolve('src/config'),
    router: utils.resolve('src/router'),
    pages: utils.resolve('src/pages'),
    mixs: utils.resolve('src/mixs'),
    store: utils.resolve('src/store'),
    utils: utils.resolve('src/utils'),
    api: utils.resolve('src/api')
});
//cordova 素材输出目录
//buildInstance.setPublicDir(utils.resolve('/test/platforms/ios/www/assets'));
//素材访问路径
//buildInstance.setPublicPath('./assets/');
//index.html输出路径
//buildInstance.indexOutputDir = utils.resolve('../../xjbtsme/CODE/doctor/index.html')

buildInstance.add('./src/index.js', 'js/index.js');
buildInstance.run();


