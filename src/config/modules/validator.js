import maxiloVue from 'maxilo-vue';

/* 
添加验证器
maxiloVue.validator.addRule('test', {
    getMessage: (v, args) => 'Error.',
    validate: (value, args) => {
        return !!value;
    }
}); */

// maxiloVue.validator.addLocalize('zh_cn', {
//     length: (v, args) => '长度必须为' + args[0] + '个字符',
//     min: (v, args) => '长度至少' + args[0] + '个字符',
//     max: (v, args) => '长度不可以超过' + args[0] + '个字符',
//     required: (v) => '必填',
//     email: v => v + '格式错误, 应该就像是something@org.com',
//     checked: (v) => '未选择',
//     select: (v) => '未选择',
//     alpha_num: v => '只为英文字母或数字'
// });