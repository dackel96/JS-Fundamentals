function scheduler(input) {
  let weekSchedule = {};

  for (const line of input) {
    let [day, name] = line.split(' ');
    if (weekSchedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
      continue;
    }
    weekSchedule[day] = name;
    console.log(`Scheduled for ${day}`);
  }

  for (const key in weekSchedule) {
    console.log(`${key} -> ${weekSchedule[key]}`);
  }
}

scheduler(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
