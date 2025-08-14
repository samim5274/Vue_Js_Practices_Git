var app = Vue.createApp({
    data() {
        return{
            show: false,
            skills: [
                {name:"HTML", experience: 25},
                {name:"CSS", experience:15},
                {name:"JS", experience:12},
                {name:"Java", experience:5},
                {name:"Php", experience:4},
                {name:"C#", experience:7},
                {name:"C", experience:3},
            ],
        }
    },

    methods: {
        toggle(){
            this.show = !this.show;
        }
    }
});

app.mount("#app");
