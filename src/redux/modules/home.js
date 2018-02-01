export const LOADING_CATEGORIES = 'home/LOADING_CATEGORIES';

const initialState = {
  loadingCategories: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES:
      return {
        ...state,
        loadingCategories: true
      };
    default:
      return state;
  }
}

// ACTIONS CREATORS - SIDE EFFECTS
export function loadCategories() {
  return dispatch => {
    dispatch(loadingCategories());
    getCategories()
      .then(result => dispatch(loadedCategories(result)))
      .catch(error => dispatch(failedCategories()));
  };
}

// ACTIONS
export const loadingCategories = () => ({
  type: LOADING_CATEGORIES
});
