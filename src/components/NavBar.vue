<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="@/assets/img/logo.png">

      </a>
      <div class="navbar-burger burger" :class="{'is-active': isShowMenu}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" :class="{'is-active': isShowMenu}">
      <div class="navbar-start">
        <router-link :to="key" class="navbar-item" :class="{'is-active': key === activeMenu}" v-for="(label, key) in string.nav" :key="key">
          {{label}}
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary" @click="changeLang">
                <span>{{string.lang}}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'nav-bar',
  computed: {
    ...mapGetters({
      string: 'string',
      lang: 'lang'
    }),
    activeMenu () {
      // return ''
      if (!this.$route.name) return ''
      return this.$route.name.toLocaleLowerCase()
    }
  },
  created () {
    document.title = this.string.title
  },
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    changeLang () {
      this.$store.dispatch('changeLang')
      this.$nextTick(() => {
        document.title = this.string.title
      })
    },
    skip (path) {
      console.log(path)
      this.$router.push(`/${path}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-start {
  justify-content: center;
  margin-right: 0;
  flex: 1;
  a.navbar-item.is-active {
    color: #3273dc;
  }
}
.navbar {
  box-shadow: 0 0 10px #cccccc;
}

</style>
