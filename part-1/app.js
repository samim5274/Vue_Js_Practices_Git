var app = Vue.createApp({
    data() {
        return{
            msg: "welcome to new vue js application",
            tutorialInfo: {
                name: "Vue js tutorial",
                githubLink: 'https://github.com/vue3-project',
            },
            htmlCode: '<a href="https://github.com/vue3-project"> Github 2</a>',
            count: 0
        }
    },

    methods: {
        getCurrentTime(){
            let ct = new Date();
            return new Date();
        },
        increase(evt, amount){
            this.count = this.count + amount;
            console.log(evt);
        },
        dicrease(amount){
            this.count = this.count - amount;
        },
        test(ev){
            console.log('Test');
            console.log(ev);
        }
    }
});

app.mount("#app");
