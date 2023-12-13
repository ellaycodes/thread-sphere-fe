import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserCard = ({ user }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsUser(currUser === user.username);
  }, [currUser, user.username]);

  const handleSwitchUser = () => {
    setCurrUser(user.username);
  };

  return (
    <div className="user_card">
      <img src={user.avatar_url} alt="" />
      <p className="profile_name">{user.name}</p>
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
