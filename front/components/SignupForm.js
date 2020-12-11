import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line arrow-body-style
const SignupForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PASSWORD" />
        <input type="password" placeholder="CONFIRM PASSWORD" />
        <button type="submit">SIGNUP</button>
      </form>
      <Link href="/login"><a>LOGIN</a></Link>
    </>
  );
};

export default SignupForm;
