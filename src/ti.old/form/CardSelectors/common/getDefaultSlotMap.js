import {
  format,
  addDays,
  differenceInDays,
  eachDayOfInterval,
  isSaturday,
  isSunday,
  addMinutes,
  isBefore,
  isAfter,
} from 'date-fns'
/*import {
  utcToZonedTime
} from 'date-fns-tz'
*/

export default ({
  date=new Date(),
  startAt=8,
  lateAfter=18,
  endBefore=22,
  tzo=1,
  duration=60, // mins
  available=4,
  premium:basePremium=0,
}) =>
{
  //console.log('getSlotsForDate', date)
  date.setUTCHours(startAt - tzo, 0, 0, 0)
  /* const dateInTargetTz = utcToZonedTime(date, timeZone )
     const tzo = date.getTimezoneOffset()
     console.log('new date starts at', date, dateInTargetTz, tzo)
     dateInTargetTz.setUTCHours(startAt, 0, 0, 0) */
  const slots = []
  var premium=basePremium

  const isWeekend = isSaturday(date) || isSunday(date)
  premium = premium + (isWeekend ? 15 : 0)

  var currentDatetime = new Date(date)
  var endDatetime = new Date(date)
  var lateFrom = new Date(date)
  endDatetime.setUTCHours(endBefore - tzo)
  lateFrom.setUTCHours(lateAfter - tzo)

  while (isBefore(currentDatetime, endDatetime)) {
    const isLate = isAfter(currentDatetime, lateFrom)
    //console.log('WHIL CR', currentDatetime, premium, isLate)
    const localPremium = premium + (isLate ? 20 : 0)

    slots.push(
      {
        date,
			  beginsAt:currentDatetime,
			  duration,
			  premium:localPremium,
        available:Math.floor(Math.random()* 6)
      }
    )
    currentDatetime = addMinutes(currentDatetime, duration)
  }
  //console.log(slots)

  return slots
}
