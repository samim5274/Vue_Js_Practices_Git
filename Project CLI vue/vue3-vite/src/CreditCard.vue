<template>
<div class="credit-card">
    <label for="">
        Name on Card
        <input type="text" :value="nameOnCard" @input="handleInput('update:nameOnCard', $event)"> <br>
    </label>

    <label for="">
        Card Number
        <input type="text" :value="cardNumber" @input="handleInput('update:cardNumber', $event)"> <br>
    </label>

    <div class="row">
        <div class="col-6">
            <label for="">
                Expiry
                <input type="text" :value="expiry" @input="handleInput('update:expiry', $event)" placeholder="MM/YY"> <br>
            </label>
        </div>
        <div class="col-6">
            <label for="">
                CVV
                <input type="text" :value="cvv" @input="handleInput('update:cvv', $event)"> <br>
            </label>
        </div>
    </div>

</div>
</template>

<script>
export default{
    props:{
        nameOnCard: {
            type: String,
            default: ""
        },
        cardNumber: {
            type: String,
            default: ""
        },
        expiry: {
            type: String,
            default: ""
        },
        cvv: {
            type: String,
            default: ""
        },
    },
    methods:{
        handleInput(cardNumber, e){
            // console.log(e.target.value);
            this.$emit(cardNumber, e.target.value);
        }
    }
}

</script>

<style>
.credit-card{
    width: 288px;
    border: 1px solid gray;
    padding: 2rem;
    border-radius: 5px;
    background: #ffffea;
    color: gray;
    min-height: 111px;
}
input{
    padding: 7px 9px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 100%;
    border: 1px solid #585858;
}
.row{
    display: flex;
}
.col-6{
    flex: 1;
    padding: 0 2px;
}
</style>