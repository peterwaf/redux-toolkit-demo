// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/usersSlice";
import "../App.css";

function Users() {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div className="container">
    <div id="users-content">
        <h1>Users from asyncThunk redux toolkit</h1>
    {loading ? users.map((user) => (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )):"Loading..."}
    </div>
  </div>;
}

export default Users;
