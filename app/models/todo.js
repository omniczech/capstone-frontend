import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  details: DS.attr('string'),
  list: DS.belongsTo('list'),
  done: DS.attr('boolean')
})
