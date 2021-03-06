//fetch and return user based on if and statment (register or login?)
//check user is legitimate then loadUser


const logGuest = (
  loadUser,
  onRouteChange,
  type,
  email,
  password,
  name,
  wrongDetails,
  guest
) => {
  console.log(
    loadUser,
    onRouteChange,
    type,
    email,
    password,
    name,
    wrongDetails,
    guest
  );
  if (type === "register") {
    console.log("register");
    fetch("https://polar-ravine-30699.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          //loadUser
          loadUser(user);
          onRouteChange("home");
        } else {
          wrongDetails();
        }
      });
  } else {
    console.log("log in");
    if (guest === "guest") {
      email = "guest@gmail.com";
      password = "password";
    }
    fetch("https://polar-ravine-30699.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          //loadUser
          loadUser(user);
          onRouteChange("home");
        } else {
          wrongDetails();
        }
      });
  }
};

export default logGuest;
