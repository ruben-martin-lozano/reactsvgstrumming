// import React, { Fragment } from 'react'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Strumming from '../src/index.jsx'

const colors = {
  simbols: '#009688',
  strummingName: '#00796b'
}
const inverseColor = {
  simbols: '#ffffff',
  strummingName: '#ffffff'
}

const strummings = [
  { name: 'Latin', pattern: 'd-Du-uDu' },
  { name: 'Down and Ups', pattern: 'DDxUxdxU' },
  { name: 'Latin', pattern: 'D-D--U-UD-DUDU' },
]

const demo = (
  <Fragment>
    <h1>Strumming Patterns</h1>
    <ul>
      {strummings.map(({name, pattern}, index) => (
        <li key={index}>
          <Strumming colors={colors} name={name} pattern={pattern} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Strumming Patterns (inverse)</h1>
      <ul>
        {strummings.map(({name, pattern}, index) => (
          <li key={index}>
            <Strumming colors={inverseColor} name={name} pattern={pattern} />
          </li>
        ))}
      </ul>
    </div>
    <h1 className='demo-Default'>Strumming Patterns (default colors)</h1>
    <ul>
      {strummings.map(({name, pattern}, index) => (
        <li key={index}>
          <Strumming name={name} pattern={pattern} />
        </li>
      ))}
    </ul>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
