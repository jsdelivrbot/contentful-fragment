import Component from '@ember/component';
import Muuri from 'muuri';

export default Component.extend({
  classNames: ['muuri-grid-component'],
  didRender() {
    this.grid = new Muuri(this.element, {
      dragEnabled: true,
      dragSortInterval: 10
    });
    this.grid.on('layoutEnd', (items) => {
      const newOrder = items.map(item => item.getElement().dataset.id);
      return this.get('updateSort')(newOrder);
    });
  }
});