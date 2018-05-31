import DS from 'ember-data'
import Ember from 'ember'

export default DS.Model.extend({
  email: DS.attr('string'),
  lists: DS.hasMany('list'),
  userteam: DS.hasMany('userteam'),
  isEmpty: Ember.computed('lists', 'lists.[]', function () {
    const items = this.hasMany('lists')
    return items.ids().length === 0
  })
})
