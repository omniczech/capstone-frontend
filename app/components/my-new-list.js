import Component from '@ember/component'

export default Component.extend({
  addingNew: false,
  actions: {
    showAddList () {
      this.toggleProperty('addingNew')
    },
    cancel () {
      this.toggleProperty('addingNew')
    },
    addNewList () {
      this.set('newList.title', this.get('title'))
      console.log(this.get('title'))
      this.sendAction('addNewList', this.get('newList'))
    }
  }
})
