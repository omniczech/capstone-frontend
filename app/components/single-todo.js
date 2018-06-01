import Component from '@ember/component'
import { alias } from '@ember/object/computed'

export default Component.extend({
  classNames: 'single-todo',
  classNameBindings: ['completed'],
  completed: alias('todo.done'),
  actions: {
    todoDone () {
      // console.log('Single todo', this.get('todo'))
      this.sendAction('todoDone', this.get('todo'))
    },
    deleteTodo () {
      return this.sendAction('deleteTodo', this.get('todo'))
    }
  }
})
