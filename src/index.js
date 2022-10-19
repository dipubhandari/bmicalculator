import App from "./app";

import ReactDOM from "react-dom";

import React from "react";
import {createStore} from 'redux'
import rootreducer from "./services/Reducers/rootreducer";
import {Provider} from 'react-redux'

const store = createStore(rootreducer)
console.log(store.data)

ReactDOM.render(<><Provider store={store}><App /></Provider></>,

document.getElementById('root')

)