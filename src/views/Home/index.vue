<template>
  <div class="container">
    <card :title="string.save.label">
      <div class="form">
        <div class="field">
          <label class="label">{{string.save.title}}</label>
          <div class="control">
            <input class="input" type="text" :placeholder="string.save.title" v-model="title">
          </div>
        </div>
        <div class="field">
          <label class="label">{{string.save.content}}</label>
          <div class="control">
            <textarea class="textarea" :placeholder="string.save.content" v-model="content"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="toAdd">{{string.save.submit}}</button>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import api from '@/service'
import { Card } from '@/components/Common'
import { mapGetters } from 'vuex'
export default {
  name: 'save',
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      string: 'string'
    })
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    // console.log(dappAddress, nebPay)
    api.query().then(res => {
      console.log('created', res)
    })
    // api.find(res => {
    //   console.log('created', res)
    // })
  },
  methods: {
    toAdd () {
      api.save({
        title: this.title,
        content: this.content
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
