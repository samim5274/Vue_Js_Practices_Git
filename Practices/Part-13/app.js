var app1 = Vue.createApp({
    data() {
        return{
            name:""
        }
    },
    template: `
        <div class="row bg-info rounded shadow-lg mb-4">
            <div class="text-center display-4 text-white p-4">Vue.js Practices</div>
        </div>
        <div class="container mt-2">                 
            <div class="row">
                <h2>Enter your name:</h2>
                <input type="text" v-model="name" class="form-control"><br>
                <p class="lead mt-2">Your name is {{name}}</p>
            </div>  
        </div>
    `,
    watch: {},

    computed: {},

    methods: {}
});

app1.mount("#app1");




var app2 = Vue.createApp({
    data() {
        return{
            message:"Hello word"
        };
    },
    template: '<h2>{{message}}</h2>',

    watch: {},

    computed: {},

    methods: {}
});

app2.mount("#app2");
