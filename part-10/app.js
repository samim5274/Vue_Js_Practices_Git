var app = Vue.createApp({
    data() {
        return{
            review: "",
            show: false,
            skills: [
                {name:"HTML", experience: 25},
                {name:"CSS", experience:15},
                {name:"JS", experience:12},
                {name:"Java", experience:5},
                {name:"Php", experience:4},
                {name:"C#", experience:7},
                {name:"C", experience:3},
                {name:"Python", experience:10},
            ],
        }
    },

    computed: {
        totalCount1(){
            console.log("count from computed method");
            return this.skills.length
        },
        experiencedSkills(){
            let es =  this.skills.filter(item => {
                return item.experience >= 10;
            })
            return es;
        }
    },

    methods: {
        remvoeSkill(i){
            this.skills.splice(i,1)
        },
        totalCount(){
            console.log("count from method");
            return this.skills.length
        }
    }
});

app.mount("#app");
