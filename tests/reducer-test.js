import reducer from '../app/reducer';

const heroOne = Object.freeze({ name: 'Wonder Woman' });
const heroTwo = Object.freeze({ name: 'Superman' });

module('reducer', () => {
  test('it can toggle the grid', (assert) => {
    // Toggle
    assert.deepEqual(
      reducer({ heroes: [heroOne], showGrid: true }, { type: 'SHOW_GRID@TOGGLE' }),
      { heroes: [heroOne], showGrid: false });
    assert.deepEqual(
      reducer({ heroes: [heroOne], showGrid: false }, { type: 'SHOW_GRID@TOGGLE' }),
      { heroes: [heroOne], showGrid: true });

    // Toggle with force
    assert.deepEqual(
      reducer({ heroes: [heroOne], showGrid: true }, { type: 'SHOW_GRID@TOGGLE', force: true }),
      { heroes: [heroOne], showGrid: true });
    assert.deepEqual(
      reducer({ heroes: [heroOne], showGrid: false }, { type: 'SHOW_GRID@TOGGLE', force: false }),
      { heroes: [heroOne], showGrid: false });
  });
});
