import ReactDom from 'react-dom'
import React from 'react'
import Router from './containers/Router/Router'
import {configureAnchors} from '../../src'

configureAnchors({
  scrollUrlHashUpdate: false,
})

ReactDom.render(
  <Router/>,
  document.getElementById('main_app')
);
