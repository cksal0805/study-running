import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  return (
    <>
      반갑습니다. 회원이신가요? <Link href="/login">로그인 하러 가기</Link>
    </>
  );
};

export default Home;
