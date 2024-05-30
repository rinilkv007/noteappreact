import React from 'react';
import Baby from './Baby';
import "./Home.css";
import btnCss from "./Button.module.css";

const Home = () => {
  return (
    <div className='home'>
        <h1 >Home component</h1>
        <Baby />
        <button className={btnCss.loginBtn}>Log in</button>
        <button className={btnCss.logoutBtn}
        >Log out</button>
    </div>
  );
};

export default Home