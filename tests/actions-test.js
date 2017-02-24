import { create, findAll, toggleGrid } from '../app/actions';

const heroOne = Object.freeze({ name: 'Wonder Woman' });
const heroTwo = Object.freeze({ name: 'Superman' });

module('actions', () => {
  test('it sends a create action', (assert) => {
    assert.deepEqual(create(heroOne), { type: 'HERO@CREATE_COMPLETE', hero: heroOne });
    assert.deepEqual(create(heroTwo), { type: 'HERO@CREATE_COMPLETE', hero: heroTwo });
  });

  test('it sends a find all action from a JSON STRING', (assert) => {
    const jsonString = JSON.stringify([heroOne]);

    assert.deepEqual(findAll(jsonString), { type: 'HERO@FINDALL_COMPLETE', heroes: [heroOne] });
  });

  test('it sends a toggle grid action', (assert) => {
    assert.deepEqual(toggleGrid(), { type: 'SHOW_GRID@TOGGLE' });
    assert.deepEqual(toggleGrid(true), { type: 'SHOW_GRID@TOGGLE', force: true });
    assert.deepEqual(toggleGrid(false), { type: 'SHOW_GRID@TOGGLE', force: false });
  });
});
