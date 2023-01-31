const {createApp} = Vue;

createApp ({
    data(){
        return{
            mails: [] ,
            quantity: 10,
            // mailsThree: [] ,

        }
    },
    methods: {
        // randomMails(){
        //     for (let index = 0; index < this.quantity; index++) {
        //         //const element = array[index];
        //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //         .then((response) =>{
        //             // handle success
        //             // console.log(response);
        //             // console.log(response.data);
        //             console.log(response.data.response);
        //             this.mailsThree.push(response.data.response);
        //         })
        //     }
        //     console.log(this.mailsThree)
        //     return this.mailsThree
        // }
    },
    mounted() {


        for (let index = 0; index < this.quantity; index++) {
            //const element = array[index];
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                // handle success
                console.log(response);
                console.log(response.data);
                console.log(response.data.response);
                this.mails.push(response.data.response);
            })
        }
        console.log(this.mails)
        // this.randomMails()

    },
}).mount('#app')