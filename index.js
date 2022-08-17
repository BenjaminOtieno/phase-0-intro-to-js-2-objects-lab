const employee = {
    name: "Sheraton",
    streetAddress:"Moi Avenue",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee = {...employee};
    copyOfEmployee[key] = value;
    return copyOfEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newCopyOfEmployee = employee
    newCopyOfEmployee[key] = value;
    return newCopyOfEmployee;
}
function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = {...employee};
    delete copyOfEmployee[key];
    return copyOfEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = employee
    delete copyOfEmployee[key]
    return copyOfEmployee;
}
