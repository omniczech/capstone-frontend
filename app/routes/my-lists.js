import Route from '@ember/routing/route'
// import Ember from 'ember'
import { inject as service } from '@ember/service'
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),
  user: alias('auth.credentials.id'),
  newTodoTemp: '',
  model () {
    // return this.get('user')
    return this.store.findRecord('user', this.get('user'))
  },
  actions: {
    addNewList (list) {
      console.log('route level:', list)
      list.save()
          .then(() => {
            list.set('addingNew', false)
          })
          .then(() => {
            this.get('flashMessages')
              .success('You made a list!')
          })
          .catch((list) => {
            // this.rollbackAttributes()
            this.get('flashMessages')
              .danger('There was a problem. Please try again.')
          })
    },
    deleteList (list) {
      list.destroyRecord()
    },
    submit (list) {
      list.save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Edited!'))
        .catch(() => this.get('flashMessages').danger('Edit failed'))
    },
    addNewTodo (newTodo) {
      let todo
      if (newTodo.title && newTodo.details) {
        console.log(newTodo)
        this.set('newTodoTemp', newTodo)
        todo = this.get('store').createRecord('todo', this.get('newTodoTemp'))
      } else {
        todo = this.get('store').createRecord('todo', {})
      }
      console.log('route level:', todo)
      todo.save()
          .then(() => {
            console.log('first then')
            todo.set('addingNew', false)
          })
          .then(() => {
            this.get('flashMessages')
              .success('You made a Todo!')
          })
          .catch(() => {
            todo.destroyRecord()
            console.log('It\'s fucked')
            // todo.rollbackAttributes()
            // this.get('model').reload()
            this.set('newTodoTemp', '')
            this.get('flashMessages')
              .danger('There was a problem. Please try again.')
          })
    },
    todoDone (todo) {
      console.log(todo.get('done'))
      todo.toggleProperty('done')
      todo.save()
        .then(() => {
          this.get('flashMessages')
            .success('You updated a Todo!')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    },
    deleteTodo (todo) {
      todo.destroyRecord()
        .then(() => {
          this.get('flashMessages')
            .success('You deleted a Todo!')
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
