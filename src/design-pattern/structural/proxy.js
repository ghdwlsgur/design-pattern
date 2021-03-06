function Car() {
  this.drive = function () {
    return 'driving';
  };
}

function Carproxy(driver) {
  this.driver = driver;
  this.drive = function () {
    if (driver.age < 18) return 'too young to drive';
    return new Car().drive();
  };
}

function Driver(age) {
  this.age = age;
}

module.exports = [Car, Carproxy, Driver];
