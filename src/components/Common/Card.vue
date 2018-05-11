<template>
  <div class="card">
    <div class="card-header">
      <div class="icon-title"></div>
      <template v-if="title">
        <div class="card-title">
          <div class="title is-4">
            <strong v-html="title"></strong>
          </div>
        </div>
      </template>
      <div class="card-head-right">
          <slot name="right"></slot>
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$base-padding: 20px;
$base-radius: 5px;
$active-color: #15b6e4;
$active-color-hover: rgba(21, 182, 228, 0.8);
.card{
  margin: $base-padding $base-padding / 2;
  border-radius: $base-radius;
  .card-header{
    padding: $base-padding 0;
    box-shadow: 0 1px 0px rgba(10, 10, 10, 0.1);
    margin: 0 $base-padding;
    align-items: center;
    position: relative;
    .image img{
      border-radius: $base-radius;
    }
    .card-header-icon{
      min-width: 50px;
      padding: 0;
      color: $active-color-hover;
      font-weight: bold;
      &:hover{
        color: $active-color;
      }
    }
    .card-head-right{
      position: absolute;
      right: 20px;
    }
  }
  .card-content{
    padding: $base-padding;
  }
  .icon-title{
    height: 15px;
    width: 4px;
    background: $active-color;
    margin-right: 20px;
  }
}
</style>
