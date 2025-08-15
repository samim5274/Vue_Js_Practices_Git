<template>
    <div class="the-card">
        <div class="the-card__title">
            <div>
                {{ product.name }}
            </div>
            <div>
                <img @click="toggleFavourite" height="30" width="30" v-if="product.addToFavourite" src="./img/yellow-star.png" alt="">
                <img @click="toggleFavourite" height="30" v-else width="30" src="./img/green-star.png" alt="">
            </div>
        </div>
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
    mounted(){
        console.log(this.$slots);
    },

    emits: {
        "buy-noe-button-clicked": function(data) {
            if(!data){
                console.log("Data missign for buy now click event. "+data);
                return false;
            }
            return true;
        }
    },

    props: {"product": {type: Object, default: () => ({})}},

    methods: {
        handleBuyNowClick(){
            this.$emit("buy-noe-button-clicked", this.product);
        },
        handleAddToCartClick(){
            this.$emit("add-to-cart-clicked", this.product);
        },
        toggleFavourite(){
            this.$emit("toggle-favourite", this.product);
        }
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
    display: flex;
    justify-content: space-between;
    align-content: center;
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