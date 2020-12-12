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
      <ul>
        <li><Link href="/"><a>메인으로 돌아가기</a></Link></li>
        <li><Link href="/login"><a>LOGIN</a></Link></li>
      </ul>
    </>
  );
};

export default SignupForm;
