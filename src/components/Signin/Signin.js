import React from "react";
import "./Signin.css";
import logGuest from "../LogGuest/LogGuest";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      wrongDetails: false
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  wrongDetails = () => {
    console.log("working?");
    this.setState({ wrongDetails: true });
  };

  /* onSubmitSignIn = () => {
    fetch("https://polar-ravine-30699.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  }; */

  render() {
    const { onRouteChange } = this.props;
    const { signInEmail, signInPassword } = this.state;

    return (
      <article className="dataFieldsContainer br3 ba dark-gray b--black-10 mv4 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <div className="title">Sign In</div>
              <p className={this.state.wrongDetails ? "f6 dark-red b" : "dn"}>
                That's not the right password!
              </p>
              <div className="topFieldInput">
                <label
                  className="inputTitle db fw6 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="inputText pa2 input-reset ba bg-transparent hover-bg-white-10 hover-white"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="passwordSignIn">
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
                  placeholder="••••••••••••"
                />
              </div>
            </fieldset>
            <div className="flex justify-center">
              <input
                //this was changed
                onClick={() =>
                  logGuest(
                    this.props.loadUser,
                    this.props.onRouteChange,
                    "signin",
                    signInEmail,
                    signInPassword,
                    "",
                    this.wrongDetails
                  )
                }
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                auto-complete="email"
              />
            </div>

            <div className="registerOption lh-copy mt3">
              <p className="f6"> New to FaceDetect?</p>

              <span
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                <b>Join Now</b>
              </span>

              <span>| </span>

              <span
                onClick={() =>
                  logGuest(
                    this.props.loadUser,
                    this.props.onRouteChange,
                    "signin",
                    signInEmail,
                    signInPassword,
                    "",
                    this.wrongDetails,
                    "guest"
                  )
                }
                className="f6 link dim black db b pointer"
              >
                Sign in as Guest
              </span>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
