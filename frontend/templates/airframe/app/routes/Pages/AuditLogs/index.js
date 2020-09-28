import React from 'react';
import * as Frontegg from '@frontegg/react';
import {
  Container,
} from './../../../components';

const AuditLogs = () => {
  return (
    <Container>
      <Frontegg.Audits />
    </Container>
  );
};

export default AuditLogs;