<template>
  <teleport to="#notifications">
    <div class="the-notification">
      {{ text }}
    </div>
  </teleport>
</template>

<script>
export default{
  props: ["text"]
}
</script>

<style>
.the-notification{
  width: 222px;
  min-height: 22px;
  box-shadow: 0 0 8px 2px #616161;
  color: #fc8e12;
  padding: 15px 9px;
  margin: 22px;
  margin-right: 0;
  background: #ffffff;
  line-height: 1;
  transition: all 0.25s;
}
</style>