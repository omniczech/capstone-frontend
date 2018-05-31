import Component from '@ember/component'
import { alias } from '@ember/object/computed'

export default Component.extend({
  // newTitle: alias('list.title'),
  editing: false,
  actions: {
    showEditing () {
      this.toggleProperty('editing')
    },
    cancel () {
      this.toggleProperty('editing')
      this.set('newTitle', '')
    },
    submit () {
      this.set('list.title', this.get('newTitle'))
      // this.sendAction('submit', this.get('list'))
      this.get('list').save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Edited!'))
        .catch(() => this.get('flashMessages').danger('Edit failed'))
    }

  }
})
