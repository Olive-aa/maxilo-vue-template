import maxiloVue from 'maxilo-vue';
console.log(process.env.VUE_APP_SERVER, 1);
const configs = {
    debug: maxiloVue.utils.base.env(process.env.VUE_APP_DEBUG, false),
    locale: 'zh_cn',
    baseURL: maxiloVue.utils.base.env(process.env.VUE_APP_SSERVER, 'http://117.146.144.39:21111'),
    storeKey: 'hBCVcLsFDCk1Ygo3',
};

maxiloVue.config.merge(configs)

export default maxiloVue.config.cs;