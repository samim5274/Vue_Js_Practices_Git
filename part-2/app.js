var app = Vue.createApp({
    data() {
        return{
            name: ""
        }
    },

    methods: {
        handleKeyup(e){
            console.log(e.target.value);
            this.name = e.target.value;
        },
        handelFormSubmit(){
            console.log("Form submited");
        },
        handelCardClick(e){
            console.log(e);
            console.log("card click");
        },
        handleView(e){
            console.log(e);
            console.log("card view");
        }
    }
});

app.mount("#app");
