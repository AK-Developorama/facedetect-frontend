import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="dataFieldsContainer br3 ba dark-gray b--black-10 mv4 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <div className="title">Register</div>
              <div className="topFieldInput">
                <label className="inputTitle db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="inputText pa2 input-reset ba bg-transparent hover-bg-white-10 hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="username"
                />
              </div>
              <div className="emailRegister">
                <label
                  className="inputTitle db fw6 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="inputText pa2 input-reset ba bg-transparent hover-bg-white-10 hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="passwordRegister">
                <label
                  className="inputTitle db fw6 lh-copy f6"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="inputText b pa2 input-reset ba bg-transparent hover-bg-white-10 hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••••••"
                />
              </div>
            </fieldset>

            <div className="">
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign me up!"
              />
            </div>

            <div
              onClick={() => onRouteChange("signin")}
              className=" signInAlternative lh-copy f6 link dim black db pointer"
            >
              <b>or Sign In</b>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
