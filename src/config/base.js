import maxiloVue from 'maxilo-vue';
const configs = {
    debug: maxiloVue.utils.base.env(process.env.DEVELOP, false),
    locale: 'zh_cn',
    baseURL: maxiloVue.utils.base.env(process.env.SERVER, 'http://localhost:9000'),
    storeKey: 'hBCVcLsFDCk1Ygo3'
};

maxiloVue.config.merge(configs)

export default maxiloVue.config.cs;