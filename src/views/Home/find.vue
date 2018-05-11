<template>
  <div class="container">
    <card :title="string.nav.find">
      <div class="field has-addons">
        <div class="control input-box">
          <input class="input is-rounded" type="text" v-model="key" :placeholder="string.find.placeholder">
        </div>
        <div class="control">
          <a class="button is-info" :class="{'is-loading': isLoading}" @click="toSearch">
            {{string.find.btn}}
          </a>
        </div>
      </div>
    </card>
    <card :title="title" v-if="isLoading || list.length > 0">
      <loading v-if="isLoading"></loading>
      <message-list :list="list" v-else></message-list>
    </card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MessageList from '@/components/MessageList'
export default {
  name: 'find',
  components: {
    MessageList
  },
  computed: {
    ...mapGetters({
      string: 'string'
    }),
    title () {
      return this.isLoading ? this.string.find.search_title_isloading : this.string.find.search_title
    }
  },
  data () {
    return {
      key: '',
      list: [],
      isLoading: false
    }
  },
  methods: {
    toSearch () {
      if (this.key.trim() === '') {
        this.$showAlert({title: `${this.string.find.input_name}${this.string.input_hint}`, type: 'danger'})
        return
      }
      this.isLoading = true
      this.list = []
      this.$api.find({key: this.key}).then(res => {
        // 在页面动画切换之后显示
        setTimeout(() => {
          this.isLoading = false
          if (!res) {
            this.$showAlert({title: `${this.string.find.search_fail}`, type: 'danger'})
            return
          }
          this.list = res.reverse()
        }, 300)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.input-box {
  flex: 1;
  max-width: 700px;
}
</style>
