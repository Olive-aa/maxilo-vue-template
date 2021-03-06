import maxiloVueBootstrapComponentInstall from 'maxilo-vue-bootstrap-component';
import maxiloVue from 'maxilo-vue';
maxiloVueBootstrapComponentInstall(maxiloVue, {useAlert: true});

//import tree from './tree.vue';
//maxiloVue.vue.component(tree.name, tree);
//example for dep

// maxiloVue.vue.depComponent({
//     testOne, 
//     a: b, 
//     a1: [b2,b3,b4], 
//     c: {
//         d1,
//         d2,
//         d3,
//         d4: d5
//     }
// });

//like this
// maxiloVue.vue.component('testOne', testOne);
// maxiloVue.vue.component('a', b);
// maxiloVue.vue.component(b2.name, b2);
// maxiloVue.vue.component(b3.name, b3);
// maxiloVue.vue.component(b4.name, b4);
// maxiloVue.vue.component(d1, d1);
// maxiloVue.vue.component(d2, d2);
// maxiloVue.vue.component(d3, d3);
// maxiloVue.vue.component(d4, d5);