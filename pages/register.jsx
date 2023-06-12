import React, {useRef} from 'react';

const RegisterPage = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef?.current.value)
    console.log(emailRef?.current.value)
    console.log(passRef?.current.value)
  } 

  return (
    <>
      <h1 className="jumbotron rext-center bg-primary square">RegisterPage</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input type="text" ref={nameRef} className="form-control mb-4 p4" />
          <input type="email" ref={emailRef} className="form-control mb-4 p4" />
          <input type="password" ref={passRef} className="form-control mb-4 p4" />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default RegisterPage