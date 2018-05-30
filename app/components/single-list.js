import Component from '@ember/component'

export default Component.extend({
  actions: {
    deleteList () {
      this.sendAction('deleteList', this.get('list'))
    },
    submit (list) {
      this.sendAction('submit', this.get('list'))
    },
    addNewTodo (todo) {
      console.log('single list level', todo)
      this.sendAction('addNewTodo', todo)
    },
    todoDone (todo) {
      console.log('single list', todo)
      this.sendAction('todoDone', todo)
    },
    deleteTodo (todo) {
      return this.sendAction('deleteTodo', todo)
    }
  }
})
