<template>
    <div class="the-comment">
        <textarea
        v-model="modelValue"
        @input="handleInput"
        v-bind="$attrs"
        ></textarea>

        <div class="text-right">
            <button @click="$emit('continueClick')">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        movelValue: {
            type: String,
            default: ""
        },
        buttonText: {
            type: String,
            default: "Comment"
        },
    },

    data() {
        return {
            msg : "welcome to sdlsc",
        }
    },

    methods:{
        handleInput(e){
            this.$emit("update:modelValue", e.target.value);
        }
    },

    // inheritAttrs : false,

    mounted(){
        console.log(this.$attrs);
    },

     // SDLC
    // beforeCreate(){
    //     console.log('before create')
    // },

    // created(){
    //     console.log('created')
    // },
    // beforeMount(){
    //     console.log('beforeMount')
    // },
    // mounted(){
    //     console.log('mounted')
    // },
    // beforeUpdate(){
    //   console.log('before update')
    // },
    // updated(){
    //   console.log('update')
    // },
    // beforeUnmount(){
    //   console.log('before unmounted')
    // },
    // unmounted(){
    //   console.log('unmounted')
    // },
}

</script>

<style scoped>
.the-comment{
    width: 100%;
    border: 1px solid gray;
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 5px;
    background: #ffffea;
    color: gray;
    min-height: 111px;
}
.text-right{
    text-align: right;
}
textarea{
    width: 100%;
    height: 10rem;
}
</style>