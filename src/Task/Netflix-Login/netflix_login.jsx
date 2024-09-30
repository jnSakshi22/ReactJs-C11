import { useState } from "react";

const NetflixLogin = () => {
  const [profile, setProfile] = useState({
    userName: "",
    password: "",
  });

  return (
    <>
      <input type="email" name="userName" />
      <input type="password" name="password" />
    </>
  );
};

export default NetflixLogin;
