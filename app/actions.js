export function create(hero) {
  return {
    type: 'HERO@CREATE_COMPLETE',
    hero
  };
}

export function findAll(str) {
  return {
    type: 'HERO@FINDALL_COMPLETE',
    heroes: JSON.parse(str)
  };
}
