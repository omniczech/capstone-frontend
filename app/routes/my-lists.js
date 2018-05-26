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
      lister: this.store.findAll('list'),
      filteredList: this.store.findAll('list')
               .then(results => results.filter((list) => {
                 return list.get('user_id') === this.get('user')
               }))
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
    }
  }
})
