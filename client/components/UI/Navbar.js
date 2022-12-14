import React from 'react';
import Button from './Button';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav>
      <h1 className={classes.appTitle}>OPULENCE.IO</h1>
      {props.navState.myPortfolioBtn && (
        <Button
          className={classes.navbarBtn}
          onClick={props.onMyPortfolioClick}
        >
          My Portfolio
        </Button>
      )}
      {props.navState.addPortfolioBtn && (
        <Button
          className={classes.navbarBtn}
          onClick={props.onAddPortfolioClick}
        >
          Add Portfolio
        </Button>
      )}
      {props.navState.loginBtn && (
        <Button className={classes.navbarBtn} onClick={props.onLoginClick}>
          Login
        </Button>
      )}
      {props.navState.signUpBtn && (
        <Button className={classes.navbarBtn} onClick={props.onSignUpClick}>
          Sign Up
        </Button>
      )}
      {props.navState.myBudgetBtn && (
        <Button className={classes.navbarBtn} onClick={props.onBudgetClick}>
          Budget
        </Button>
      )}
      {props.navState.logoutBtn && (
        <Button className={classes.navbarBtn} onClick={props.onLogOutClick}>
          Log Out
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
