class Temperature {
  constructor(temperature) {
    this.degC = temperature;
  }

  getDegF() {
    return (this.degC * 9) / 5 + 32;
  }

  getDegK() {
    return this.degC + 273.15;
  }
}

let temp = new Temperature(25);

alert(`25 degrees C equals to ${temp.getDegF()} degrees F`);
alert(`25 degrees C equals to ${temp.getDegK()} degrees K`);
