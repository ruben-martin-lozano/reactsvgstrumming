// import React, { Fragment } from 'react'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Strumming from '../src/index.jsx'

const strummings = [
  { name: 'Single Downbeat', pattern: 'D-------' },
  { name: 'Double Downbeats', pattern: 'D---D---' },
  { name: 'All Downbeats', pattern: 'D-D-D-D-' },
  { name: 'All Downbeats but last', pattern: 'D-D-D-DU' },
  { name: 'All Downbeats with chunk', pattern: 'DxDxDxDx' },
  { name: 'All Upbeats', pattern: '-U-U-U-U' },
  { name: 'All Upbeats with chunk', pattern: 'xUxUxUxU' },
  { name: 'All Downbeats with backbeat', pattern: 'd-D-d-D-' },
  { name: 'Downbeats & Upbeats', pattern: 'DUDUDUDU' },
  { name: 'Downbeats & Upbeats with backbeat', pattern: 'duDuduDu' },
  { name: 'Downbeats & Upbeats with chunk', pattern: 'duxuduDu' },
  { name: 'Downbeats & Upbeats with double chunk', pattern: 'duxuduxu' },
  { name: 'Split the measure', pattern: 'D-D-DUDU' },
  { name: 'Emphasize the 1st Downbeat', pattern: 'D-dududu' },
  { name: 'Emphasize the 2nd Downbeat', pattern: 'duD-dudu' },
  { name: 'Emphasize the 2nd and 4th Downbeats', pattern: 'duD-duD-' },
  { name: 'Emphasize the 4th Downbeat', pattern: 'dud-d-D-' },
  { name: 'Latin', pattern: 'd-Du-uDu' },
  { name: 'Latin with chunk', pattern: 'd-xu-uDu' },
  { name: 'Latin with chunk variation #1', pattern: 'duxu-udu' },
  { name: 'Latin with double chunk', pattern: 'd-xu-uxu' },
  { name: 'Latin variation #1', pattern: 'd-Du-uD-' },
  { name: 'Latin variation #2', pattern: 'Dudu-udu' },
  { name: 'Latin variation #3', pattern: 'du-u-udu' },
  { name: 'Andean', pattern: 'D-duD-du' },
  { name: 'Country', pattern: 'd-Dud-Du' },
  { name: 'Country variation #1', pattern: 'd-DuduDu' },
  { name: 'Country variation #2', pattern: 'd-D--udu' },
  { name: 'Country variation #3', pattern: 'du-udu-u' },
  { name: 'Shuffle Downbeats & Upbeats with backbeat', pattern: 'duDuduDu', shuffle: true },
  { name: 'Shuffle Latin', pattern: 'd-Du-uDu', shuffle: true },
  { name: 'Rumba Catalana (ventilador)', pattern: 'duxuduxu' },
  { name: 'Rumba Catalana (ventilador) variantion #1', pattern: 'duxududu' },
  { name: 'Reggae', pattern: 'xxdxxxdx' },
  { name: 'Reggae variation #1', pattern: 'xxduxxdx' },
  { name: 'Single Downbeat', pattern: 'D-----' },
  { name: 'All Downbeats', pattern: 'D-D-D-' },
  { name: 'All Upbeats', pattern: '-U-U-U' },
  { name: 'Downbeats & Upbeats', pattern: 'DUDUDU' },
  { name: 'Emphasize the 1st Downbeat', pattern: 'D-dudu' },
  { name: 'Emphasize the 1st Downbeat variation #1', pattern: 'D---du' },
  { name: 'Emphasize the 3rd Downbeat', pattern: 'dud-D-' },
  { name: 'Semiquaver', pattern: 'D-d-uud-dudu' },
  { name: 'Semiquaver variation #1', pattern: 'D-Duddu-dudu' },
  { name: 'Semiquaver with chunk', pattern: 'D-x-uud-dudu' },
]

const demo = (
  <Fragment>
    <h1 className='demo-Default'>Strumming Patterns (default)</h1>
    <ul>
      {strummings.map(({name, pattern, shuffle}, index) => (
        <li key={index}>
          <Strumming name={name} pattern={pattern} shuffle={shuffle} />
        </li>
      ))}
    </ul>
    <div className='demo-Custom'>
      <h1>Strumming Patterns (custom)</h1>
      <ul>
        {strummings.map(({name, pattern, shuffle}, index) => (
          <li key={index}>
            <Strumming name={name} pattern={pattern} shuffle={shuffle} />
          </li>
        ))}
      </ul>
    </div>
    <div className='demo-Inverse'>
      <h1>Strumming Patterns (custom)</h1>
      <ul>
        {strummings.map(({name, pattern, shuffle}, index) => (
          <li key={index}>
            <Strumming name={name} pattern={pattern} shuffle={shuffle} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Strumming Patterns (line thick)</h1>
    <ul>
      {strummings.map(({name, pattern, shuffle}, index) => (
        <li key={index}>
          <Strumming name={name} pattern={pattern} lineThick={10} />
        </li>
      ))}
    </ul>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
