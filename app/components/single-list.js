import Component from '@ember/component'

export default Component.extend({
  actions: {
    deleteList () {
      this.sendAction('deleteList', this.get('list'))
    }
  }
})
