const getEmployerRole = (employeeName, employees) => {
  const employeeFound = employees.find(
    employeeRole => employeeRole.name === employeeName
  );
  return employeeFound.role;
};

module.exports = getEmployerRole;
