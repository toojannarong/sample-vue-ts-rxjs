<template>
    <div> Bye bye</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        name: 'bye',
        props: {
            bye: String,
        },
        created: () => {
          console.log('This Bye Component!');
        },
        methods: {

        },
    });
</script>

<style scoped>
    div {
        border: firebrick solid 1px;
    }

</style>