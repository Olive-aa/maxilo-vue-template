import maxiloVue from 'maxilo-vue';
let $router = maxiloVue.router.getRoute();

$router.add('/path/to', () => import('../../pages/test/index'));