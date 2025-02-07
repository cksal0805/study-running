import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line arrow-body-style
const LoginForm = () => {
  const onSubmitLoginForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PASSWORD" />
        <Link href="/main"><a><button onClick={onSubmitLoginForm}>LOGIN</button></a></Link>
      </form>
      <ul>
        <li><Link href="/"><a>메인으로 돌아가기</a></Link></li>
        <li><Link href="/signup"><a>SIGN UP</a></Link></li>
      </ul>
    </>
  );
};

export default LoginForm;
