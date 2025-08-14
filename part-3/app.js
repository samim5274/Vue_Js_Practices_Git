var app = Vue.createApp({
    data() {
        return{
            num: 10,
            result: ""
        }
    },

    methods: {
        getDouble(){
            this.result = this.num * 2;
        },
        getSquere(){
            this.result = this.num * this.num;
        },
        addTen(){
            this.result = this.num + 10;
        },
        reset(){
            this.num = "";
            this.result = "";
        },
    }
});

app.mount("#app");
