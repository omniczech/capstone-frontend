import Component from '@ember/component'

export default Component.extend({
  addingNew: false,
  newTodo: '',
  // list: this.get('list'),
  // newTodo: '',
  actions: {
    showAddTodo () {
      this.toggleProperty('addingNew')
    },
    cancel () {
      this.toggleProperty('addingNew')
    },
    addNewTodo () {
      this.set('newTodo', this.get('store').createRecord('todo', {}))
      this.set('newTodo.title', this.get('title'))
      this.set('newTodo.details', this.get('details'))
      this.set('newTodo.list', this.get('list'))
      this.set('newTodo.done', false)
      this.set('addingNew', false)
      console.log(this.get('newTodo'))
      this.sendAction('addNewTodo', this.get('newTodo'))
    }
  }
})