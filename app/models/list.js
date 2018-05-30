import DS from 'ember-data'
import Ember from 'ember'

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  todos: DS.hasMany('todo'),
  isEmpty: Ember.computed('items', 'items.[]', function () {
    const items = this.hasMany('todos')
    return items.ids().length === 0
  })
})
