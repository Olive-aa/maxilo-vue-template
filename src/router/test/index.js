import maxiloVue from 'maxilo-vue';
console.log(maxiloVue);
let $router = maxiloVue.router.getRoute();

$router.add('/path/to', () => import('../../pages/test/index'));
$router.add('/test/component', () => import('../../pages/test/component'));