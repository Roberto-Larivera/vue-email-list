const {createApp} = Vue;

createApp ({
    data(){
        return{
            mails: [] 
        }
    },
    methods: {
        
    },
    mounted() {


        for (let index = 0; index < 10; index++) {
            //const element = array[index];
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                // handle success
                // console.log(response);
                // console.log(response.data);
                console.log(response.data.response);
                this.mails.push(response.data.response);
            })
        }
        console.log(this.mails)


    },
}).mount('#app')