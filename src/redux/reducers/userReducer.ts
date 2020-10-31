import { UsersData } from '../../models/user';
import {
  GET_USERS_SUCCESS,
  UsersActionTypes,
} from '../actionTypes/userActionTypes';

const initialState = {
  users: [],
};
export function userReducer(
  state = initialState,
  action: UsersActionTypes
): UsersData {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
