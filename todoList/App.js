import React from 'react'
import Navigation from './Navigation.js'
import {Provider} from 'react-redux'
import store from './src/store/index.js'


export default function App () {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}
