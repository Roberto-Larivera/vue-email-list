console.log('int ok');
const {createApp} = Vue;

createApp ({
    data(){
        return{

        }
    },
    methods: {
        
    },
    mounted() {



        axios.get('...')
        .then(function (response) {
            // handle success
            console.log(response);
        })



    },
}).mount('#app')