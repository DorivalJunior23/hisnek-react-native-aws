import * as React from 'react';
import Router from './src/router';
import { Amplify } from 'aws-amplify';

import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
   
        <Router />
  );
}
