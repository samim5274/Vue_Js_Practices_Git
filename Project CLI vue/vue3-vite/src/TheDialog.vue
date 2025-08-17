<template>
    <teleport to="#dialogs">
        <div class="the-dialog">
            <div class="the-dialog__container">
                <div class="the-dialog__header">
                    {{ heading }}
                </div>
                <div class="the-dialog__body">
                    <slot></slot>
                </div>
            </div>            
        </div>
    </teleport>
</template>

<script>
    export default{
        props:["heading"],
    };
</script>

<style>
.the-dialog{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0000008f;
    display: flex;
}
.the-dialog__container{
    margin: auto;
    width: 333px;
    min-height: 222px;
    background: #fff;
    border-radius: 10px;
}
.the-dialog__header{
    border-radius: 10px 10px 0 0;
    background: #dfdfdf;
    font-weight: bold;
    padding: 9px 1rem;
}
.the-dialog__body{
    padding: 9px 1rem;
}
</style>