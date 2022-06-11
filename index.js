// Write your solution in this file!

const driver = {};
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

function updateDriverWithKeyAndValue(driver, key, value) {
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
 name: "Sam"
 streetAddress: "11 Broadway"
  return Object.assign({}, driver, { [key]: value });

  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return driver;
  return employee;
  name: "Sam"
  streetAddress:  "12Broadway"
}



function deleteFromDriverByKey(driver, key) {
}
function deleteFromEmployeeByKey(employee, key) {
  
  // const newObj = { ...driver }
  const newOj = Object.assign({}, driver);
  // const newObj = { ...employee }
  const newObj= Object.assign({}, employee);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
  
}
