const configs = {
    debug: process.env.DEBUG ? true : false,
    locale: 'zh_cn',
    baseURL: process.env.SERVER ? ('http://' + process.env.SERVER) : 'http://localhost:20888',
    storeKey: 'qidjfi1jiafji1i@'
};　
import maxiloVue from 'maxilo-vue';

/* for: this.$config.debug */
maxiloVue.config.merge(configs)