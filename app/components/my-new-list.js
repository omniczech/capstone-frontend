import Component from '@ember/component'

export default Component.extend({
  addingNew: false,
  newList: '',
  actions: {
    showAddList () {
      this.toggleProperty('addingNew')
    },
    cancel () {
      this.toggleProperty('addingNew')
    },
    addNewList () {
      this.set('newList', this.get('store').createRecord('list', {}))
      this.set('newList.title', this.get('title'))
      this.set('addingNew', false)
      console.log(this.get('title'))
      this.sendAction('addNewList', this.get('newList'))
    }
  }
})
