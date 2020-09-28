import React from 'react';
import * as Frontegg from '@frontegg/react';
import { Container } from './../../../components';

const Slack = () => {
  return (
    <Container>
      <Frontegg.Slack rootDir="/pages/slack" />
    </Container>
  );
};

export default Slack;