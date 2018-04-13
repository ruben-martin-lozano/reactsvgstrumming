import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import StrummingPattern from '../src/index.jsx'

const strummingPatterns = [
  { name: 'Latin', pattern: 'dDuuDu' }
]

const demo = (
  <Fragment>
    <h1>Strumming Patterns</h1>
    <ul>
      {strummingPatterns.map((pattern, index) => (
        <li key={index}>
          <StrummingPattern pattern={pattern} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Strumming Patterns (inverse)</h1>
      <ul>
        {strummingPatterns.map((pattern, index) => (
          <li key={index}>
            <StrummingPattern pattern={pattern} />
          </li>
        ))}
      </ul>
    </div>
    <h1 className='demo-Default'>Strumming Patterns (default colors)</h1>
    <ul>
      {strummingPatterns.map((pattern, index) => (
        <li key={index}>
          <StrummingPattern pattern={pattern} />
        </li>
      ))}
    </ul>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
