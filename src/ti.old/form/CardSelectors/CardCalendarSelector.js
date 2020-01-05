import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  addDays,
  addMinutes,
  eachDayOfInterval,
  getUnixTime
} from 'date-fns'
import { format } from 'date-fns-tz'

import C from 'ui/cssClasses'
import { Heading, Card, SnapSlider } from 'ui/elements'

import CardRadio from './common/CardRadio'
import getDefaultSlotMap from './common/getDefaultSlotMap'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.true" */ './card_calendar_selector.scss')

const main_class = 'card_calendar_selector'
const day_class = 'day_card'

const defaultLabelTL= (from, to) => `${from} to ${to}`
const defaultRemainingTL=(available) => `Only ${available} left !`

const CardCalendarSelector = memo(({
  id,
  className,
  dayClassName,
  style,

  startDate=new Date(),
  endDate,
  dates,
  excludeDate,

  locale,

  slotMap,
  getSlotMap=getDefaultSlotMap,
  displayTimeZone='Europe/London',
  labelTL=defaultLabelTL,
  remainingTL=defaultRemainingTL,

  prefix,
  name,
  value
}) =>
{
  const formatHours = (date) => format(date, 'HH:mm', { timeZone:displayTimeZone })

  const Day = ({
    date,
    locale,
    dayFormat='iiii d',
    monthFormat='MMMM yyyy',
    slotMap=[]
  }) => {
    return(
      <Card
        className={
          day_class
					+ (dayClassName ? ' ' + dayClassName : '')
					+ ' b-white'}
        style={{ minWidth:'240px' }}
      >
        <Card.Header className='b-blue'>
          <Heading
            title={ format(date, dayFormat, { locale })}
            subtitle={ format(date, monthFormat, { locale }) }
            as='p'
            headingClassName='h4'
          />
        </Card.Header>
        <Card.Divider/>
        <Card.Content>
          { slotMap.map((slotProps,i) =>
            <Slot
              key={ i }
              date={ date }
              { ...slotProps }
            />
          ) }
        </Card.Content>
      </Card>
    )
  }
  const ComplexSlotLabel = (beginsAt, duration, available) =>
    <span className=''>
      <p className='nm'>
        { labelTL(
					  formatHours(beginsAt),
					  formatHours(addMinutes(beginsAt, duration))
        )
        }
      </p>
      { (available > 0) && (available <= 2) &&
      <p className='urgency nm tu c-red'>{ remainingTL(available) }</p>
      }
    </span>


  const Slot = ({
    beginsAt,
    duration,
    available,
    premium,
    prefix,
  }) =>
  {
    const has_premium = premium && (available > 0)
    const fieldValue = getUnixTime(beginsAt)
    return(
      <CardRadio
        ComplexLabel={
          () =>
            ComplexSlotLabel(beginsAt, duration, available)
        }
        className='s-sm'
        disabled={ !available }
        altValuePrefix={ has_premium ? '€' : '' }
        altValue={ has_premium ? premium : '' }
        altValueClassName={ has_premium ? 'premium' : 'free' }
        prefix={ prefix }
        name={ name }
        id={ fieldValue }
        value={ fieldValue }
        compact
      />


    ) }

  const endDateComp = dates ? null : endDate || addDays(startDate, 6)
  const datesComp = dates || (excludeDate ?
    eachDayOfInterval({
      start:startDate,
      end:endDateComp
    }).reduce((a,e) => {
      excludeDate(e) && a.push(e)
      return a
    },[])
    :
    eachDayOfInterval({
      start:startDate,
      end:endDateComp
    })
  )

  return(
    <div
      className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : ' b-red')
      }
      id={ id }
      style={ style }
    >
      <SnapSlider
        compact
        pin='left'
      >
        { datesComp.map((e,i) =>
          <Day
            date={ e }
            locale={ locale }
            slotMap={ slotMap || getSlotMap({ date:e }) }
          />
        )}
      </SnapSlider>
    </div>)
})

CardCalendarSelector.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  style:PropTypes.object,
  dates:PropTypes.arrayOf(PropTypes.string),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),

  slotMap:PropTypes.arrayOf(PropTypes.object),
  getSlotMap:PropTypes.func,
  displayTimeZone:PropTypes.string,
  labelTL:PropTypes.func,
  remainingTL:PropTypes.func,

  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,

  /*
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
	*/
}


export default CardCalendarSelector

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

