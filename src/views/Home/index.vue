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
import { mapGetters } from 'vuex'
export default {
  name: 'save',
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
  methods: {
    toAdd () {
      if (this.title.trim() === '') {
        this.$showAlert({title: `${this.string.save.title}${this.string.input_hint}`, type: 'danger'})
        return
      }
      if (this.content.trim() === '') {
        this.$showAlert({title: `${this.string.save.content}${this.string.input_hint}`, type: 'danger'})
        return
      }
      this.$api.save({
        title: this.title,
        content: this.content
      }).then(res => {
        this.$showAlert({title: `${this.string.nav.save}${this.string.success}`, type: 'info'})
        this.title = ''
        this.content = ''
      })
    }
  }
}
</script>
