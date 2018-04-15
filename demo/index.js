// import React, { Fragment } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import Strumming from '../src/index.jsx'

const strummings = [
  { name: 'Latin', pattern: 'DUDUDUDU' }
]

/*
const demo = (
  <Fragment>
    <h1>Strumming Patterns</h1>
    <ul>
      {strummings.map((pattern, index) => (
        <li key={index}>
          <Strumming pattern={pattern} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Strumming Patterns (inverse)</h1>
      <ul>
        {strummings.map((pattern, index) => (
          <li key={index}>
            <Strumming pattern={pattern} />
          </li>
        ))}
      </ul>
    </div>
    <h1 className='demo-Default'>Strumming Patterns (default colors)</h1>
    <ul>
      {strummings.map((pattern, index) => (
        <li key={index}>
          <Strumming pattern={pattern} />
        </li>
      ))}
    </ul>
  </Fragment>
)
*/
ReactDOM.render(<Strumming name={strummings[0].name} pattern={strummings[0].pattern} />, document.getElementById('demo'))
