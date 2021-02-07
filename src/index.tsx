import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.VFC = () => <h1>Hello React</h1>;

const rootId = Date.now().toString(16);

document.head.innerHTML = '';
document.body.innerHTML = `<div id="${rootId}"></div>`;

ReactDOM.render(<App />, document.getElementById(rootId));
