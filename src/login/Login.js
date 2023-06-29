import "./Login.css";
import { useState } from "react";

function Login() {
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const inputChangeHandler = (event) => {
    if (event.target.name === "Account") {
      setAccount(event.target.value);
    } else if (event.target.name === "Username") {
      setUsername(event.target.value);
    } else if (event.target.name === "Password") {
      setPassword(event.target.value);
    }
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (account !== "" && username !== "" && password !== "") {
      setMessage("Success");
    } else {
      setMessage("Please enter all the inputs! ");
    }
  };

  return (
    <div className="container">
      <div className="heading">Sign Up!</div>
      <br />
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="Account"
          placeholder="Account Locator"
          value={account}
          onChange={(event) => inputChangeHandler(event)}
        />
        <br />
        <input
          onChange={(event) => inputChangeHandler(event)}
          name="Username"
          value={username}
          placeholder="Username"
        />
        <br />
        <input
          onChange={(event) => inputChangeHandler(event)}
          name="Password"
          value={password}
          placeholder="Password"
        />
        <br />
        <div>
          By singing up, I agree to the{" "}
          <a href="https://samooha.tech">Terms of Service</a> and{" "}
          <a href="https://samooha.tech">Privacy policy</a>.
        </div>
        <br />
        <button>Sign Up</button>
        <br />
      </form>
      <div>{message}</div>
    </div>
  );
}

export default Login;
