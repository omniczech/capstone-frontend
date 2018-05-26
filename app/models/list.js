import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  user_id: DS.attr('number'),
  todos: DS.attr()
})
