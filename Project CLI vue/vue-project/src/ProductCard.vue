<template>
    <div class="the-card">
        <div class="the-card__title">{{ product.name }}</div>
        <div class="the-card__body">
            <img :src="product.thumbnail" alt="">
            <h4 style="text-align: center;">{{ product.price }}/- <small>only</small></h4>
        </div>
        <div class="the-card__footer" >
            <button @click="handleBuyNowClick">Buy Now</button>
            <button @click="handleAddToCartClick">Add Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {"product": {type: Object, default: () => ({})}},

    methods: {
        handleBuyNowClick(){
            this.$emit("buy-noe-button-clicked", this.product);
        },
        handleAddToCartClick(){
            this.$emit("add-to-cart-clicked", this.product);
        }
    },

    mounted(){
        console.log(this.$slots);
    },

    
}
</script>

<style>
.the-card{
    width: 300px;
    border: 1px solid #08b4f8;
    min-height: 100px;
    margin: 22px auto;
}

.the-card__title{
    background: #08b4f8;
    padding: 5px 11px;
    color: #fff;
}

.the-card__body{
    padding: 0.9rem;
}

.the-card__body img {
    height: 9rem;
}

.the-card__footer{
    background: #a8a8a8;
    padding: 5px 11px;
    text-align: center;
}

button{
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
}
</style>