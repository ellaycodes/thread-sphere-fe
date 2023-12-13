import { useContext, useEffect, useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { UserContext } from "../contexts/UserContext";
import { UserCard } from "./UserCard";

export const Profile = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <BodyHeader title={"My Profile"} />
      <section className="profiles">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </section>
    </>
  );
};
