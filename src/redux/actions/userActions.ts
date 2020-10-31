import { Action, Store } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { User } from '../../models/user';
import {
  GET_USERS_FAILURE,
  GET_USERS_IN_PROGRESS,
  GET_USERS_SUCCESS,
  UsersActionTypes,
} from '../actionTypes/userActionTypes';

export const getUsersInProgressAction = {
  type: GET_USERS_IN_PROGRESS,
};

export const getUsersSuccessAction = (payload: User[]): UsersActionTypes => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailureAction = (error: Error): UsersActionTypes => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getUsersAction = (): ThunkAction<
  Promise<void>,
  Store,
  void,
  UsersActionTypes
> => async (dispatch: ThunkDispatch<Store, void, Action>): Promise<void> => {
  dispatch(getUsersInProgressAction);

  try {
    const users: User[] = await new Promise((resolve) => {
      setTimeout(() => resolve([{ name: 'xoxo' }]), 1000);
    });
    dispatch(getUsersSuccessAction(users));
  } catch (error) {
    dispatch(getUsersFailureAction(error));
  }
};
