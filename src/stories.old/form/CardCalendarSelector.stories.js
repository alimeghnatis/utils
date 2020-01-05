import React, { useState }from 'react'

import { action } from '@storybook/addon-actions'
import { CardCalendarSelector } from 'ui'

import {
  isSunday,
} from 'date-fns'


export default {
  title: 'Form|CardCalendarSelector',
}

const select_dates = [
  new Date(Date.UTC(2020, 12, 7)),
  new Date(Date.UTC(2020, 12, 12)),
  new Date(Date.UTC(2020, 12, 14)),
  new Date(Date.UTC(2020, 12, 20)),
  new Date(Date.UTC(2020, 12, 21)),
  new Date(Date.UTC(2020, 12, 22)),
]

export const Default = () =>
  <CardCalendarSelector
    displayTimeZone='Europe/Rome'
    name={ 'appointment_time' }
    id={ 'dateSelector' }
    prefix='tds'
  />

export const StartDate = () =>
  <CardCalendarSelector
    startDate={ new Date(Date.UTC(2019,1,1)) }
    id={ 'dateSelector' }
    name={ 'appointment_time' }
    prefix='tds'
  />

export const StartDateAndEndDate = () =>
  <CardCalendarSelector
    startDate={ new Date(Date.UTC(2019,1,1)) }
    endDate={ new Date(Date.UTC(2019,1,20)) }
    id={ 'dateSelector' }
    name={ 'appointment_time' }
    prefix='tds'
  />

export const ExcludeDate = () =>
  <CardCalendarSelector
    startDate={ new Date(Date.UTC(2019,1,1)) }
    endDate={ new Date(Date.UTC(2019,1,30)) }
    excludeDate={ (date) => {
      const cond = isSunday(date) ? true : false
      return cond
    }
    }
    id={ 'dateSelector' }
    name={ 'appointment_time' }
    prefix='tds'
  />


export const CustomDates = () =>
  <CardCalendarSelector
    dates={ select_dates }
    id={ 'dateSelector' }
    name={ 'appointment_time' }
    prefix='tds'
  />

export const Controlled = () =>
{
  const [currentValue, setCurrentValue] = useState(null)
  const [currentPremium, setCurrentPremium] = useState(0)
  return(
    <>
      {' '}
      <h3>
			The selected value is
        {' '}
        { currentValue }
,
			with a
        {' '}
        { currentPremium }
        {' '}
€ premium.
      </h3>
      <CardCalendarSelector
        dates={ select_dates }
        id={ 'dateSelector' }
        name={ 'appointment_time' }
        prefix='tds'
      />
    </>

  )

}

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
