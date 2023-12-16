import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Loading } from "./Loading";

export const UserCard = ({ user }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsUser(currUser === user.username);
    setIsLoading(false)
    localStorage.setItem('user', currUser)
  }, [currUser, user.username]);

  const handleSwitchUser = () => {
    setCurrUser(user.username);
  };

  if (isLoading) {
    return (
        <Loading/>
    )
  }

  return (
    <div className="user_card">
      <img src={user.avatar_url} alt="" />
      <p className="profile_name"><b>{user.name}</b></p>
      <p className="profile_username">{user.username}</p>
      {isUser ? (
        <button onClick={handleSwitchUser} disabled>
          Current User
        </button>
      ) : (
        <button onClick={handleSwitchUser}>Switch User</button>
      )}
    </div>
  );
};
