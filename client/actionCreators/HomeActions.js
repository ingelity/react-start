import api from '../api';
import {
  HEADLINE_SUCCESS,
} from '../actions';

export function onFetchHeadline(headlineIndex) {
  return {
    type: null,
    types: [null, HEADLINE_SUCCESS],
    promise: api.getHeadline(headlineIndex),
  };
}
