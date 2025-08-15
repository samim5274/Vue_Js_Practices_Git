var app = Vue.createApp({
    data() {
        return{
            skills: [
                {name:"HTML", experience: 25},
                {name:"CSS", experience:15},
                {name:"JS", experience:12}
            ],
            newSkill: {name:"", experience:0}
        }
    },

    methods: {
        addSkill(){
            this.skills.push(this.newSkill),
            this.newSkill = ""
        },
        remvoeSkill(i){
            this.skills.splice(i,1)
        }
    }
});

app.mount("#app");
