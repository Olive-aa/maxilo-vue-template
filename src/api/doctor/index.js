// 用户登录类
export const security = {
    login: '/auth/login',
    register: '/auth/register',
    code: '/validate/qrcode',
    login_out: '/test/auth/out',
};
//个人信息
export const info = {
    save:'/profile/save',
    obtain:'/profile',
    service:'/service_platform/in',
    list:'/doctor/manage/list',
    check:'/doctor/manage/check',
};
//下拉选择
export const getDicList = {
    sex: '/enums/sex',
    racial : '/enums/racial ',
    native : '/enums/native ',
    politics : '/enums/politics ',
    edu : '/enums/edu ',
    facial_photo:'/profile/phone'
};

// 咨询列表
export const consult = {
    consult:'/problem',
};

// 文章
export const list = {
    acticle: '/acticle/2',
    doctorList:'/doctor/list',
    articleList:'/articleList',
};

export default {
    security,
    info,
    getDicList,
    consult,
    list,
};