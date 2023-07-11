import React from "react";

export const Login = () => {
  return (
    <>
      <input placeholder="Email" />
      <input placeholder="Password" />

      <button>Login</button>

      <div>
        <p>Forgot your Password?</p>
        <button>Reset passowrd</button>
      </div>
    </>
  )
}