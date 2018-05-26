import Component from '@ember/component'

export default Component.extend({
  editing: false,
  actions: {
    showEditing () {
      this.toggleProperty('editing')
    },
    cancel () {
      this.toggleProperty('editing')
    },
    submit () {
      this.set('list.title', this.get('list.title'))
      // this.sendAction('submit', this.get('list'))
      this.get('list').save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Edited!'))
        .catch(() => this.get('flashMessages').danger('Edit failed'))
    }

  }
})
