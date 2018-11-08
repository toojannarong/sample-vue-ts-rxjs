<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <bye></bye>
    <HelloWorld :msg="test"></HelloWorld>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from './components/hello-world/HelloWorld.vue';
    import bye from './components/bye/bye';
    import * as _ from 'lodash';
    import Axios from 'axios';

    export default Vue.extend({
        name: 'app',
        components: {
            HelloWorld,
            bye
        },
        data: () => {
            return {
                test: _.toUpper('Welcome to Your Vue.js + TypeScript App'),
            };
        },
        methods: {
            test: ()  => {
                Axios.get('');
            }
        },

    });
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
