import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  lists: DS.hasMany('list'),
  userteam: DS.hasMany('userteam')
})
