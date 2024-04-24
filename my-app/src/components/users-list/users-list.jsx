import { useState, useEffect } from "react";
import UserItem from "../user-list-item/user-list-item";
import './user-list.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    const getData = async () => {
      await fetch (' https://jsonplaceholder.typicode.com/users').then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      }).then((data) => setUsers(data))
      .catch(err => console.log('Error status code: ' + err.message));
    } 

    const buttonUsers = document.querySelector(".btn-show-users");
    buttonUsers.addEventListener("click", getData);
  
    return () => {
      buttonUsers.removeEventListener("click", getData);
    };
  }, [users]);

  const elements = users.map((item) => {
    const { id, name, ...itemProps } = item;

  return <UserItem key={id} name={name} {...itemProps}></UserItem>;

  })

  if (!users) {
    return null;
  }

  return (
    <div className="user-list">
      <button type="submit" className="btn btn-outline-light btn-show-users">
        Загрузить данные пользователей
      </button>
      <ul className="user-list">{elements}</ul>
    </div>
  );
};

export default UsersList;

