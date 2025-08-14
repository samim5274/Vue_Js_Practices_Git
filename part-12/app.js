var app = Vue.createApp({
    data() {
        return{
            firstName: "",
            lastName: "",
            fullName : ""
        };
    },

    watch: {
        firstName(newValue){
            this.fullName = newValue + " " + this.lastName
        },
        lastName(newValue){
            this.fullName = this.firstName + " " + newValue
        },
    },

    computed: {
        // fullName(){
        //     return this.firstName + " " + this.lastName;
        // }
    },

    methods: {
        // fullName(){
        //     return this.firstName + " " + this.lastName;
        // }
    }
});

app.mount("#app");
