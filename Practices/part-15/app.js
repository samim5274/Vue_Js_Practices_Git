var app = Vue.createApp({
    data() {
        return{}
    },
    watch: {},

    computed: {},

    methods: {}
});

app.component('contact-details', {
    data(){
        return {
            name: "mamnur Rahman"
        }
    },
    template: `
        <h1>Contact Details</h1>
        <p><strong>Name:</strong> Naimul Islam Riyad</p>
        <p><strong>Website:</strong> www.riad.com</p>
        <p><strong>Address:</strong> Savar, Dhaka</p>
        <p><strong>Phone:</strong> 01762174652</p>
    `
});

app.mount("#app");
