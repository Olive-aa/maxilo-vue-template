<template>
    <div class="container-fluid" :style="{backgroundImage: 'url(' + c + ')', width: '500px'}">
        <div class="row">
            <div class="col-xs-12" :style="{backgroundImage: '(' + c + ')'}">
                <form>
                    <mxl-upload v-model="q"></mxl-upload>
                </form>
            </div>
        </div>
        {{c}}
    </div>
</template>

<script>
import testImg from '../../assets/images/2.png';
export default {
    data(){
        return {
            c: testImg,
            q: '<h3>2</h3>',
            s: [
                {label: 123, value: 1, hasChild: 1, childs: [{label: '1-2', value: 3, hasChild: 0}]},
                {label: 1234, value: 2, hasChild: 1, childs: []},
            ]
        };
    },
    methods: {
    }
}
</script>




