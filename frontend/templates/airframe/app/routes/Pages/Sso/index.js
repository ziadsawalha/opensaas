import React from 'react';
import * as Frontegg from '@frontegg/react';
import {
  Container,
} from './../../../components';

const Sso = () => {
  return (
    <Container>
      <Frontegg.SsoConfiguration rootDir="/pages/sso" />
    </Container>
  );
};

export default Sso;