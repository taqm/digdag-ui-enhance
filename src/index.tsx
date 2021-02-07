import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Routes from './Routes';

const App: React.VFC = () => <Routes />;

const rootId = Date.now().toString(16);

document.head.innerHTML = '';
document.body.innerHTML = `<div id="${rootId}"></div>`;

ReactDOM.render(<App />, document.getElementById(rootId));
