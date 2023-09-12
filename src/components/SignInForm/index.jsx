import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialValue = {
  radio: '',
  check: false,
  login: "",
  email: "",
  password: "",
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
  hndleRadio = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  hndleCheck = ({ target: { name, checked } }) => {
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
      login,
      email,
      password,
      loginValid,
      emailValid,
      passwordValid,
    } = this.state;
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
