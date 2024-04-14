
const ID_CALENDAR_HOBBIES = 'ID_CALENDAR_HOBBIES';
const WORKOUT_PAGE = 'WORKOUT_PAGE';

const TIME = {
  DEFAULT: { HOUR: 6, MINUTE: 0 },
  SUNDAY: { HOUR: 8, MINUTE: 0 },
  PERSONAL: { HOUR: 12, MINUTE: 0 }
}

const WORKOUT_TIME = 'treinar';

const WORKOUTS = [
  formatWorkout("aeróbico", `${WORKOUT_TIME} aeróbico`),
  formatWorkout("superior", `${WORKOUT_TIME} superiores`),
  formatWorkout("inferior", `${WORKOUT_TIME} inferiores`)
];

const WORKOUT_CANCELLED_NAME_EVENT = 'workout cancelled';
const WORKOUT_MOBILITY_DAY = "mobilidade";

const DAYS_WEEK = 7;