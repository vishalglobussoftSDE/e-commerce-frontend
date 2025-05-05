import React from "react";
import Header from "../components/Header.jsx";
import {Link} from "react-router-dom"

const AccountPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Link>Home /</Link>
          <Link>My Account</Link>
        </div>
        <div>
          <span>Welcome! </span>
          <span>Md Rime!</span>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
