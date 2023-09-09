import React, { Component } from "react";
import styles from "./SignInForm.module.css";
const initialValue = {
  email: "",
  password: "",
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

  hndleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false,
    });
  };

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const classesEmail = `${styles.input} ${
      emailValid ? null : styles.invalid
    }`;
    const classesPassword = `${styles.input} ${
      passwordValid ? null : styles.invalid
    }`;
    // const classesPassword = [styles.input];
    // if(passwordValid === false){
    //   classesPassword.push(styles.invalid)
    // }
    return (
      <form className={styles.form} onSubmit={this.handleForm}>
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
