import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from '../src/components/Table/Main'
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
