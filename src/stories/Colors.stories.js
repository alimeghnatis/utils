import React from 'react'
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'

export default {
  title: 'Core|Colors',
  component: ColorPalette,
}

const THEME = [
  'primary',
  'secondary',
  'accent1',
  'accent2',
  'accent3'
]

const WHEEL = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'indigo',
  'azure',
  'blue',
  'violet',
  'pink'
]

const MODALS = [
  'success',
  'warning',
  'error'
]


const getColorMap = (prefix, list) => {
  const a = []
  list.forEach((color) => a.push({
    title:`${prefix}.${color}`,
    //subtitle:'',
    colors:[
      `var(--dark-${color})`,
      `var(--${color})`,
      `var(--light-${color})`,
      `var(--on-${color})`
    ]
  })

  )
  return a
}

const themeMap = getColorMap('theme', THEME)

const modalsMap = getColorMap('modals', MODALS)

const wheelMap = getColorMap('wheel', WHEEL)

export const defaultStyle = () => (
  <>
    <ColorPalette>
      { themeMap.map((e,i) =>
        <ColorItem
          key={i}
          { ...e }
        />
      ) }
    </ColorPalette>
    <ColorPalette>
      {
        wheelMap.map((e,i) =>
          <ColorItem
            key={i}
            { ...e }
          />
        ) }
    </ColorPalette>
    <ColorPalette>
      { modalsMap.map((e,i) =>
        <ColorItem
          key={i}
          { ...e }
        />
      ) }
    </ColorPalette>
  </>
)

const setterTester = (MAP) => (
  MAP.map((e,i) =>
    <div className={ 'x-' + e }>
      <span style={{
        background:'var(--x-dark)',
        color:'var(--x-on)',
      }}
      >
          Dark
      </span>
      <span style={{
        background:'var(--x)',
        color:'var(--x-on)',
      }}
      >
          Base
      </span>
      <span style={{
        background:'var(--x-light)',
        color:'var(--x-on)',
      }}
      >
          Light
      </span>
    </div>
  ))

export const Setters = () => (
  <>
    <p>Theme</p>
    { setterTester(THEME) }
    <p>Wheel</p>
    { setterTester(WHEEL) }
    <p>Modals</p>
    { setterTester(MODALS) }
  </>
)


const getterTester = (MAP) => (
  MAP.map((e,i) =>
    <>
      <div className={ 'x-' + e }>
        <span className={ 'bx-dark cx-on' }>Back Dark</span>
        <span className={ 'bx cx-on' }>Back Base</span>
        <span className={ 'bx-light cx-on' }>Back Light</span>
      </div>
      <br/>
      <div className={ 'y-' + e }>
        <span
          className={ 'dy-dark cy-dark' }
          style={{ borderWidth:'10px', borderStyle:'solid' }}
        >
          Border dark
        </span>
        <span
          className={ 'dy cy' }
          style={{ borderWidth:'10px', borderStyle:'solid' }}
        >
          Border base
        </span>
        <span
          className={ 'dy-light cy-light' }
          style={{ borderWidth:'10px', borderStyle:'solid' }}
        >
          Border light
        </span>
      </div>
      <br/>
      <div className={ 'z-' + e }>
        <span className='cz-dark'>Color Dark</span>
        <span className='cz'>Color Base</span>
        <span className='cz-light'>Color Light</span>
      </div>
    </>
  ))

export const Getters = () => (
  <>
    { getterTester(THEME) }
    { getterTester(WHEEL) }
    { getterTester(MODALS) }
  </>

)
