<template>
  <div>
    <div class="rating">
        <div class="rating-star" v-for="index in 5" :key="index" @click="handleClick(index)">
            <img v-if="index <= modelValue" height="40" src="./img/yellow-star.png" alt="">
            <img v-if="index > modelValue" height="40" src="./img/green-star.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        modelValue:{
            type: Number,
            default: 0
        },
    },

    emits: ["update:modelValue"],

    methods:{
        handleClick(index){
            this.$emit("update:modelValue", index)
        },
    },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: sans-serif;
    line-height: 1.8;
}
header{
    background: #023a68;
    color: aqua;
    font-size: 2rem;
    padding: 2rem;
}
header h2{
    text-align: center;
}
.container{
    padding: 2rem;
}
button{
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
}
.rating{
    width: 200px;
    display: flex;
    align-items: center;
}
.rating-star{
    cursor: pointer;
    margin: 2px;
}
.rating-star img:hover{
    transform: scale(1.1);
}
</style>