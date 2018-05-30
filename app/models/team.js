import DS from 'ember-data'

export default DS.Model.extend({
  team_name: DS.attr('string'),
  userteam: DS.hasMany('userteam')
})
