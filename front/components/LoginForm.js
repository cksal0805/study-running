import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line arrow-body-style
const LoginForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PASSWORD" />
        <button type="submit">LOGIN</button>
      </form>
      <Link href="/signup"><a>SIGN UP</a></Link>
    </>
  );
};

export default LoginForm;
