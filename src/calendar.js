
const getCalendarHobbies = _ => CalendarApp.getCalendarById(ID_CALENDAR_HOBBIES)

const getEventForDates = (startDate, endDate, search) => getCalendarHobbies().getEvents(startDate, endDate, { search })

const getEventsForDay = (date, search) => getCalendarHobbies().getEventsForDay(date, { search })

const isMobilityDay = date => getEventsForDay(date, WORKOUT_MOBILITY_DAY)[0] != undefined;

function getDescriptionTemplate(type) {
  return `treino de <b>${type}</b>\n
<a href="${WORKOUT_PAGE}"><span>workout</span></a>`;
}

function createEvent(title, startDate, description) {

  startDate.setHours(TIME.DEFAULT.HOUR);
  startDate.setMinutes(TIME.DEFAULT.MINUTE);

  let endDate = new Date(startDate);
  endDate.setHours(TIME.DEFAULT.HOUR + 1);
  endDate.setMinutes(TIME.DEFAULT.MINUTE);

  if (isSunday(startDate)) {
    startDate.setHours(TIME.SUNDAY.HOUR);
    startDate.setMinutes(TIME.SUNDAY.MINUTE);

    endDate.setHours(TIME.SUNDAY.HOUR + 1);
    endDate.setMinutes(TIME.SUNDAY.MINUTE);

  } else if (isTuesday(startDate) || isThursday(startDate)) {
    startDate.setHours(TIME.PERSONAL.HOUR);
    startDate.setMinutes(TIME.PERSONAL.MINUTE);

    endDate.setHours(TIME.PERSONAL.HOUR + 1);
    endDate.setMinutes(TIME.PERSONAL.MINUTE);

  } else if (isMobilityDay(startDate)){
    startDate.setHours(startDate.getHours() + 1)
    endDate.setHours(endDate.getHours() + 1)
  }

  getCalendarHobbies().createEvent(title, startDate, endDate, { description });
};

function updateCancelledEventAndRemoveCalendar(date) {
  let eventWorkoutCancelled = getEventsForDay(date, WORKOUT_CANCELLED_NAME_EVENT)[0];

  eventWorkoutCancelled.setColor(CalendarApp.EventColor.GRAY);
  eventWorkoutCancelled.setDescription("");
  eventWorkoutCancelled.removeAllReminders();
  eventWorkoutCancelled.setAllDayDate(date);

  cancelWorkout(date)
}

function cancelWorkout(date) {
  let event = getEventsForDay(date, WORKOUT_TIME)[0];
  event && event.deleteEvent();
}