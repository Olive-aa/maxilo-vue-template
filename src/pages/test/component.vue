<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <form>
                    <mxl-upload v-model="q"></mxl-upload>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
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




