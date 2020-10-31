import { User } from '../../models/user';

export const GET_USERS_IN_PROGRESS = 'app/GET_USERS_IN_PROGRESS';
export const GET_USERS_SUCCESS = 'app/GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'app/GET_USERS_FAILURE';

export type GetUsersInProgress = {
  type: typeof GET_USERS_IN_PROGRESS;
};

export type GetUsersSuccess = {
  type: typeof GET_USERS_SUCCESS;
  payload: User[];
};

export type GetUsersFailure = {
  type: typeof GET_USERS_FAILURE;
  payload: Error;
};

export type UsersActionTypes =
  | GetUsersInProgress
  | GetUsersSuccess
  | GetUsersFailure;
