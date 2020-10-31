import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersAction } from '../../redux/actions/userActions';

type DispatchToProps = {
  getUsers: () => void;
};

type UsersProps = DispatchToProps;

export const UsersComponent = ({ getUsers }: UsersProps): JSX.Element => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div>
      <h2>Users list</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export const mapDispatchToProps: DispatchToProps = {
  getUsers: getUsersAction,
};

export const Users = connect(null, mapDispatchToProps)(UsersComponent);
