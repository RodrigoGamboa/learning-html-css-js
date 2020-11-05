class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(){
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }

  twoDigitsNumber(num) {
    if(num <= 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}