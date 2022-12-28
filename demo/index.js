import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import Strumming from '../src/index.jsx'

const strummings = [
  { name: 'Strumming #1', pattern: 'DdUup.-x' },
  { name: 'Strumming #2', pattern: 'DdUup.-x', shuffle: true },
  { name: 'Strumming #3', pattern: 'D-ddUuup..-x' },
  { name: 'Strumming #4', pattern: 'D-dudu' },
  { pattern: 'D-D-D-D-' }
]

const demo = (
  <Fragment>

    <section className='Demo'>
      <h1>Strumming Patterns (squared)</h1>
      <ul>{strummings.map(({name, pattern}, index) => <li key={index}><Strumming name={name} pattern={pattern} isSquared /></li>)}</ul>
    </section>



    <section className='Demo'>
      <h1>Strumming Patterns (default)</h1>
      <ul>{strummings.map(({name, pattern, shuffle}, index) => <li key={index}><Strumming name={name} pattern={pattern} shuffle={shuffle} /></li>)}</ul>
    </section>
    <section className='DemoCustom'>
      <h1>Strumming Patterns (custom)</h1>
      <ul>{strummings.map(({name, pattern, shuffle}, index) => <li key={index}><Strumming name={name} pattern={pattern} shuffle={shuffle} /></li>)}</ul>
    </section>
    <section className='DemoInverse'>
      <h1>Strumming Patterns (custom)</h1>
      <ul>{strummings.map(({name, pattern, shuffle}, index) => <li key={index}><Strumming name={name} pattern={pattern} shuffle={shuffle} /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Strumming Patterns (squared)</h1>
      <ul>{strummings.map(({name, pattern}, index) => <li key={index}><Strumming name={name} pattern={pattern} isSquared /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Strumming Patterns (line thick)</h1>
      <ul>{strummings.map(({name, pattern}, index) => <li key={index}><Strumming name={name} pattern={pattern} isThick /></li>)}</ul>
    </section>
  </Fragment>
)

const container = document.getElementById('demo')
const root = createRoot(container)

root.render(demo)
