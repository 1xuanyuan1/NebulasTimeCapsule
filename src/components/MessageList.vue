<template>
  <div class="list">
    <div class="item fadeInUp wow" v-for="(item, index) in list" :key="index">
      <div class="item-head">
        <div class="item-dot"></div>
        <div class="item-item">{{getTime(item.timestamp)}}</div>
      </div>
      <div class="item-content">
        <p class="title is-4">{{item.title}}</p>
        <p class="subtitle is-6">{{item.content}}</p>
      </div>
    </div>
    <div class="list-line fadeInUp wow"></div>
  </div>
</template>
<script>
import { dateFormat } from '@/utils'
import { WOW } from 'wowjs'
export default {
  name: 'message-list',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    new WOW().init()
  },
  methods: {
    getTime (timestamp) {
      return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(timestamp * 1000))
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  position: relative;
  .list-line {
    position: absolute;
    width: 2px;
    height: calc(100% - 30px);
    background: #cccccc;
    top: 10px;
    left: 5px;
    z-index: 2;
  }
  .item {
    padding-left: 30px;
    padding-bottom: 20px;
    position: relative;
    &:first-child {
      .item-head .item-dot{
        background: #ff83b2;
        box-shadow: 0 0 15px #ff4382;
      }
    }
    .item-head {
      padding-bottom: 10px;
      .item-dot {
        width: 12px;
        height: 12px;
        background: #cccccc;
        position: absolute;
        border-radius: 50%;
        left: 0;
        top: 6px;
        z-index: 3;
      }
    }
    .item-content {
      border-radius: 10px;
      box-shadow: 0px 2px 20px #cccccc;
      padding: 20px;
    }
  }
}
</style>
