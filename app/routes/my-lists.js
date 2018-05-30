import Route from '@ember/routing/route'
import Ember from 'ember'
import { inject as service } from '@ember/service'
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),
  user: alias('auth.credentials.id'),
  model () {
    // return this.get('user')
    return Ember.RSVP.hash({
      user_lists: this.store.findRecord('user', this.get('user')),
      lister: this.store.findAll('list'),
      filteredList: this.store.findAll('list')
               .then(results => results.filter((list) => {
                 return list.get('user_id') === this.get('user')
               })),
      todoer: this.store.findAll('todo')
      // newList: this.get('store').createRecord('list', {})
    })
  },
  actions: {
    addNewList (list) {
      console.log('route level:', list.get('title'))
      list.save()
          .then(() => {
            list.set('addingNew', false)
          })
          .then(() => {
            this.get('flashMessages')
              .success('You made a list!')
          })
          .catch(() => {
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
    addNewTodo (todo) {
      console.log('route level:', todo)
      todo.save()
          .then(() => {
            todo.set('addingNew', false)
          })
          .then(() => {
            this.get('flashMessages')
              .success('You made a Todo!')
          })
          .catch(() => {
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
            .success('You finished a Todo!')
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
