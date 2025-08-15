var app = Vue.createApp({
    data() {
        return{
            aboutMe:{
                name: "shamim Hossain",
                nickNake: "shamim",
                website: "www.facebook.com"
            },
            skills: [
                {name:"HTML", experience: 25},
                {name:"CSS", experience:15},
                {name:"JS", experience:12}
            ],
        }
    },

    methods: {}
});

app.mount("#app");
