const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

const setCategory = (idx) => ({
  type: 'SET_CATEGORY',
  payload: idx,
});

export { setSortBy, setCategory };
