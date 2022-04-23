// Write your solution in this file!

const employee = {
  name: "john",
  streetAdress: "mulburry",
};

const updateEmployeeWithKeyAndValue = (object, newkey, value) => {
  return {
    ...object,
    [newkey]: value,
  };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (object, newkey, value) => {
  object[newkey] = value;
  return object;
};

const deleteFromEmployeeByKey = (object, newkey) => {
  const newObj = { ...object };
  delete newObj[newkey];
  return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (object, newkey) => {
  delete object[newkey];
  return object;
};

console.log(updateEmployeeWithKeyAndValue(employee, "height", 170));
console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "height", 170)
);
console.log(deleteFromEmployeeByKey(employee, "height"));
console.log(employee);
console.log(destructivelyDeleteFromEmployeeByKey(employee, "height"));
console.log(employee);
