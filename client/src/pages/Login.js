import React from 'react';

function Login(props) {
  return (
    <>
      <div>
        <form>
          <label for="user-name">Username</label>
          <input type="text" id="user-name" placeholder="please enter a username"></input>

          <label for="user-name">Username</label>
          <input type="text" id="user-email" placeholder="something@somewhere.domang"></input>

          <button type="submit">Login</button>
        </form>

      </div>
    </>
  )
}

export default Login;