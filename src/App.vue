<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="h-fade">
      <router-view :key="key" class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters({
      string: 'string'
    }),
    key () {
      return this.$route.fullPath
    }
  },
  data () {
    return {
      isHasExtension: typeof window.webExtensionWallet === 'undefined'
    }
  },
  mounted () {
    if (this.isHasExtension) {
      this.$showAlert({title: `${this.string.noExtension}`, type: 'danger'})
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';
html, body {
  padding: 0;
  margin: 0;
  // font-family: Microsoft Yahei,Helvetica Neue,\\5B8B\4F53,Helvetica,Arial,sans-serif;
}
.wow {
  visibility: hidden;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
[class*='-enter-active'] {
  transition: all .5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
[class*='-leave-active'] {
  transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
/* 纵向移动 */
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
/* 横向移动 */
.h-fade-enter, .h-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
