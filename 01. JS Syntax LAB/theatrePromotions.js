function ticketsCalculator(dayOfWeek, age) {
  let ticketPrise = 0;
  if (age >= 0 && age <= 18) {
    switch (dayOfWeek) {
      case "Weekday":
        ticketPrise = "12$";
        break;
      case "Weekend":
        ticketPrise = "15$";
        break;
      case "Holiday":
        ticketPrise = "5$";
        break;
      default:
        ticketPrise = "Error!";
        break;
    }
  } else if (age > 18 && age <= 64) {
    switch (dayOfWeek) {
      case "Weekday":
        ticketPrise = "18$";
        break;
      case "Weekend":
        ticketPrise = "20$";
        break;
      case "Holiday":
        ticketPrise = "12$";
        break;
      default:
        ticketPrise = "Error!";
        break;
    }
  } else if (age > 64 && age <= 122) {
    switch (dayOfWeek) {
      case "Weekday":
        ticketPrise = "12$";
        break;
      case "Weekend":
        ticketPrise = "15$";
        break;
      case "Holiday":
        ticketPrise = "10$";
        break;
      default:
        ticketPrise = "Error!";
        break;
    }
  } else {
    ticketPrise = "Error!";
  }

  console.log(ticketPrise);
}

ticketsCalculator("Weekday", 123);
