import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import TableWrap from './components/Table/TableWrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <TableWrap />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
