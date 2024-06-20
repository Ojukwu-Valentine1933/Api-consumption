import { useState, useRef } from "react";
import ErroInfo from "./ErroInfo";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMessage, setError] = useState("");

  // console.log(firstname);

  const emailRef = useRef("");

  //form submit function

  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log(emailRef.current.value);

    if (!firstname || !lastname || !email) {
      return setError("All input field are required");
    }

    setFirstname("");
    setLastname("");
    setPassword("")
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h1 className="text-center py-2 ">
            Register to become a student
          </h1>
            {errorMessage && <ErroInfo errorMessage={errorMessage} />}
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
             
              <input
                type="text"
                className="form-control mb-3"
                id="firstname"
                placeholder="firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              />

              <input
                type="text"
                className="form-control mb-3"
                id="name"
                placeholder="lastname"
                onChange={(event) => setLastname(event.target.value)}
                value={lastname}
              />

              <input
                type="email"
                className="form-control mb-3"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-secondary submit py-3 my-4  form-control"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
