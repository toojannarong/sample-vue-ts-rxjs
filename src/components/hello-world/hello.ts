import Vue from 'vue';
import {Observable} from 'rxjs';

export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    methods: {

    },
    subscriptions: () => {
        return {
            xx: new Observable(subscriber => {
                console.log('Test Msg Sunscription');
            }),
        }
    }
});