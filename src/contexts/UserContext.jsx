import { createContext, useState, useEffect } from "react";
import { getUsers } from "../../utils/api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currUser, setCurrUser] = useState('tickle122');

  useEffect(() => {
    getUsers().then((userArr) => {
      setUsers(userArr);
    });
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, currUser, setCurrUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
