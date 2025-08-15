var app1 = Vue.createApp({
    data() {
        return{
            name:""
        }
    },
    watch: {},

    computed: {},

    methods: {
        clear(){
            this.name = "";
        }
    }
});

app1.mount("#app1");
