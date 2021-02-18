import React from 'react';
import Celender from '../components/celendar/Celender';
import TodoList from '../components/TodoList';

import styled from 'styled-components';

const Layout = styled('div')`
  display : flex;
`;

const main = () => (
    <Layout>
      <TodoList />
      <Celender />
    </Layout>
  );

export default main;
