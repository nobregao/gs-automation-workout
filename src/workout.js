
function formatWorkout(type, name) {
    return { type, name }
  }
  
  function getLastWorkout() {
    const lastWeek = getDaysToSearch(DAYS_WEEK, "-");
  
    const firstDayLastWeek = lastWeek[lastWeek.length - 1];
  
    const workoutsDefinedList = getEventForDates(firstDayLastWeek, subtractDay(new Date()), WORKOUT_TIME);
  
    let lastWorkoutName = ""
  
    if (workoutsDefinedList.length > 0) {
      lastWorkoutName = workoutsDefinedList.pop().getTitle()
    } else {
      lastWorkoutName = WORKOUTS[WORKOUTS.length - 1].name;
    }
    
    return WORKOUTS.filter(item => lastWorkoutName.startsWith(item.name))[0];
  }
  
  function getNextWorkout(lastWorkout) {
  
    let indexLastWorkout = WORKOUTS.findIndex(workout => workout.name === lastWorkout.name)
  
    if (indexLastWorkout == WORKOUTS.length - 1) {
      indexLastWorkout = -1;
    }
  
    return WORKOUTS[indexLastWorkout + 1];
  }
  
  function createWorkout(nextWorkout, date) {
    cancelWorkout(date);
    createEvent(nextWorkout.name, date, getDescriptionTemplate(nextWorkout.type));
  }