const {createApp} = Vue;

createApp ({
    data(){
        return{
            mails: [] ,
            quantity: 10,
            mailsThree: [] ,
            mailsFour: [] ,
            mailsFourVif: false ,

        }
    },
    methods: {
        randomMails(mailsInt){
            for (let index = 0; index < this.quantity; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    // handle success
                    // console.log(response);
                    // console.log(response.data);
                    // console.log(response.data.response);
                    mailsInt.push(response.data.response);
                })
            }
            // console.log(this.mailsThree)
            return mailsInt
        },
        randomMailsFour(mailsInt){
            for (let index = 0; index < this.quantity; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    // handle success
                    // console.log(response);
                    // console.log(response.data);
                    // console.log(response.data.response);
                    mailsInt.push(response.data.response);
                    if(mailsInt.length == this.quantity){
                        console.log('sono pieno')
                        this.mailsFourVif = true
                    }else{
                        console.log('sono vuoto')
                    }
                })
            }
            // console.log(this.mailsThree)
        },
    },
    mounted() {
        this.randomMails(this.mails);

    },
    created() {
        this.randomMailsFour(this.mailsFour)
    },
}).mount('#app')