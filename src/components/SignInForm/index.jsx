import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialValue = {
  male: false,
  female: false,
  check: false,
  login: "",
  email: "",
  password: "",
  maleValid: true,
  femaleValid: true,
  checkValid: true,
  loginValid: true,
  emailValid: true,
  passwordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialValue,
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    // e.target.reset()
    this.setState({
      ...initialValue,
    });
  };

  // handleEmail=(e)=>{
  //   this.setState ({email:e.target.value})
  //   }

  //   handlePassword=(e)=>{
  //     this.setState ({password:e.target.value})
  //   }
  hndleRadio = ({ target: { name, checked } }) => {
    // console.dir(target);
    this.setState({ [name]: checked });
  };

  hndleCheck = ({ target: { name, checked } }) => {
    // console.dir(target);
    this.setState({ [name]: checked });
  };

  hndleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false,
    });
  };

  render() {
    const {
      male,
      female,
      check,
      login,
      email,
      password,
      maleValid,
      femaleValid,
      checkValid,
      loginValid,
      emailValid,
      passwordValid,
    } = this.state;
    const classMale = cx(styles.imput, {
      [styles.invalid]: !maleValid,
    });
    const classFemale = cx(styles.imput, {
      [styles.invalid]: !femaleValid,
    });
    const classesCheck = cx(styles.input, {
      [styles.invalid]: !checkValid,
    });
    const classesLogin = cx(styles.input, {
      [styles.invalid]: !loginValid,
    });
    const classesEmail = cx(styles.input, {
      [styles.invalid]: !emailValid,
    });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <label htmlFor="male">
          <input
            className={classMale}
            value={male}
            onChange={this.hndleRadio}
            id="male"
            name="radio"
            type="radio"
          />
          male
        </label>
        <label htmlFor="female">
          <input
            className={classFemale}
            value={female}
            onChange={this.hndleRadio}
            id="female"
            name="radio"
            type="radio"
          />
          female
        </label>

        <label htmlFor="">
          <input
            className={classesCheck}
            checked={check}
            onChange={this.hndleCheck}
            name="check"
            type="checkbox"
          />
          check me
        </label>

        <input
          className={classesLogin}
          value={login}
          onChange={this.hndleInput}
          type="text"
          name="login"
          placeholder="your login"
        />
        <input
          className={classesEmail}
          value={email}
          onChange={this.hndleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
          value={password}
          onChange={this.hndleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
