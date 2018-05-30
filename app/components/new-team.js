import Component from '@ember/component'

export default Component.extend({
  newTeam: '',
  actions: {
    createTeam () {
      this.set('newTeam', this.get('store').createRecord('team', {}))
      // this.set('newUserTeam', this.get('store').createRecord('userteam', {}))
      this.set('newTeam.team_name', this.get('teamName'))
      this.sendAction('createTeam', this.get('newTeam'))
    }
  }
})
