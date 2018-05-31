import Component from '@ember/component'

export default Component.extend({
  addingNew: false,
  newTodo: {},
  // list: this.get('list'),
  // newTodo: '',
  actions: {
    showAddTodo () {
      this.toggleProperty('addingNew')
    },
    cancel () {
      this.toggleProperty('addingNew')
      this.set('newTodo', {})
    },
    addNewTodo () {
      this.set('newTodo.list', this.get('list'))
      this.set('newTodo.done', false)
      this.set('addingNew', false)
      console.log(this.get('newTodo'))
      this.sendAction('addNewTodo', this.get('newTodo'))
      this.set('newTodo', {})
    }
  }
})
