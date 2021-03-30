var app = new Vue({
    el: '#app',
    data: {
        emails: []
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    console.log(result.data.response);
                    this.emails.push(result.data.response);
         });
        }
    }
})

Vue.config.devtools = true