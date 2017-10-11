/*
 * Actions
 *
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and
 * nobody messes it up weirdly somewhere.
 *
 * To add a new Action:
 *
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_NINJAS,
  FETCH_NINJAS_SUCCESS,
  FETCH_NINJAS_ERROR,
} from './constants';

/**
 * Fetch the competitors.
 *
 * @return {object} An action object with a type of `FETCH_NINJAS`.
 */
export function fetchNinjas() {
  return {
    type: FETCH_NINJAS,
  };
}

/**
 * Dispatched when the competitors are fetched by the request saga.
 *
 * @param  {array} ninjas The list of competitors.
 *
 * @return {object}      An action object with a type of `FETCH_NINJAS_SUCCESS`
 *                       passing the list.
 */
export function ninjasFetched(ninjas) {
  return {
    type: FETCH_NINJAS_SUCCESS,
    ninjas,
  };
}

/**
 * Dispatched when fetching the list of competitors fails.
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of `FETCH_NINJAS_ERROR`
 *                        passing the error.
 */
export function ninjaFetchError(error) {
  return {
    type: FETCH_NINJAS_ERROR,
    error,
  };
}
