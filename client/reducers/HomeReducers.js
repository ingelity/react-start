import {
  HEADLINE_SUCCESS,
} from '../actions';

const initialState = {
  headlineIndex: 0,
  headline: 'welcome home',
};
const reducers = {};

reducers[HEADLINE_SUCCESS] = (state, payload) => ({
  ...state,
  headlineIndex: state.headlineIndex + 1,
  headline: payload.data,
});

export default (state = initialState, action) =>
  (reducers[action.type] ? reducers[action.type](state, action.payload) : state);
