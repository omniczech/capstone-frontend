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
      this.set('title', '')
    },
    addNewList () {
      this.set('newList', this.get('store').createRecord('list', {}))
      this.set('newList.title', this.get('title'))
      this.set('addingNew', false)
      // // console.log(this.get('newList'))
      this.sendAction('addNewList', this.get('newList'))
      this.set('title', '')
    }
  }
})
