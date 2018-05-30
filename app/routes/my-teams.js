import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),
  user: alias('auth.credentials.id'),
  newUserTeam: '',
  model () {
    return this.store.findRecord('user', this.get('user'))
  },
  actions: {
    createTeam (team) {
      team.save()
        .then((team) => {
          console.log('user', this.get('user'))
          console.log('Team', team.get('id'))
          // let user = this.get('currentUser.user')
          // console.log('++++ ' + user.get('username'))
          // const user = this.get('currentUser')
          this.set('newUserTeam', this.get('store').createRecord('userteam', {}))
          this.set('newUserTeam.user', this.get('user'))
          this.set('newUserTeam.team', team)
          this.get('newUserTeam').save()
          // console.log(sendable)
          // sendable.save()
        })
    }
  }
})
