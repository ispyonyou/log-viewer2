import React from 'react'
import {render} from 'react-dom'

import Root from './Root'

render(<Root />, document.getElementById('root'))

//import Worker from "worker-loader!./FilterWorker";
//
//const worker = new Worker();
//
//worker.postMessage({ a: 1 });
//worker.onmessage = (event) => {};
//
//worker.addEventListener("message", (event) => {});
//