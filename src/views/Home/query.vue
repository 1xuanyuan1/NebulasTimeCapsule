<template>
  <div class="container">
    <card :title="string.nav.query">
      <loading v-if="isLoading"></loading>
      <message-list :list="list" v-else></message-list>
    </card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MessageList from '@/components/MessageList'
export default {
  name: 'query',
  components: {
    MessageList
  },
  computed: {
    ...mapGetters({
      string: 'string'
    })
  },
  data () {
    return {
      isLoading: false,
      list: []
    }
  },
  mounted () {
    this.isLoading = true
    this.$api.query().then(res => {
      if (!res) {
        this.error()
        return
      }
      // 在页面动画切换之后显示
      setTimeout(() => {
        this.list = res.reverse()
        this.$nextTick(() => {
          this.isLoading = false
        })
      }, 300)
    }).catch(e => {
      this.error()
    })
  },
  methods: {
    error () {
      this.isLoading = false
      this.$showAlert({title: `${this.string.nodata}`, type: 'danger'})
      setTimeout(() => {
        this.$router.push('/save')
      }, 500)
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
