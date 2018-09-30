import React from 'react'
import {render} from 'react-dom'
import Modal from 'react-modal'

import Root from './Root'

Modal.setAppElement(document.getElementById('root'));

render(<Root />, document.getElementById('root'))