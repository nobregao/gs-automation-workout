
function main() {

    const _getWorkoutCancelledForDay = date => getEventsForDay(date, WORKOUT_CANCELLED_NAME_EVENT)[0]?.getTitle()
    const _getWorkoutExistForDay = date => getEventsForDay(date, WORKOUT_TIME)[0]?.getTitle()
  
    var lastWorkout = getLastWorkout();
  
    const datesNextWeek = getDaysToSearch(DAYS_WEEK);
  
    datesNextWeek
      .filter(date => {
  
        let isWorkoutDayCancelled = _getWorkoutCancelledForDay(date);
        if (isWorkoutDayCancelled) {
          updateCancelledEventAndRemoveCalendar(date);
        }
  
        let isWorkoutExistCancelled = _getWorkoutExistForDay(date);
  
        return !isWorkoutDayCancelled && !isWorkoutExistCancelled;
      })
      .forEach(date => {
        let nextWorkout = getNextWorkout(lastWorkout);
  
        console.log(`Dia ${date.getDate()} treino é ${nextWorkout.type}`)
        createWorkout(nextWorkout, date);
  
        lastWorkout = nextWorkout;
      });
  }