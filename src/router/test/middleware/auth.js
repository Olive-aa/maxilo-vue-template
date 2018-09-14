export default function (store, to, from, next) {
    if (!store.getters['testAuth/login']) {
        alert('middleware:auth is failed.');
        return false;
    }
    return true;
}