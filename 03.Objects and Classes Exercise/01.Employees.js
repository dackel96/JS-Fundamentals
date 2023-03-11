// function parseEmployees(input) {
//   let employees = {};

//   for (const employee of input) {
//     employees[employee] = employee.length;
//   }

//   for (const key in employees) {
//     console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
//   }
// }

function parseEmployees(input) {
  Object.entries(
    input.reduce((data, employee) => {
      data[employee] = employee.length;
      return data;
    }, {})
  ).forEach(([employee, length]) => {
    console.log(`Name: ${employee} -- Personal Number: ${length}`);
  });
}

parseEmployees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
