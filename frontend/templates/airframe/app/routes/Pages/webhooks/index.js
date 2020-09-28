import React from 'react';
import * as Frontegg from '@frontegg/react';
import {
  Container,
} from './../../../components';

const Webhooks = () => {
  return (
    <Container>
      <Frontegg.WebHooks rootDir="/pages/webhooks" />
    </Container>
  );
};

export default Webhooks;