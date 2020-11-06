class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMs = 0;
    this.intervalIdMs = 0;
  }

  startClick(){
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    this.intervalIdMs = setInterval(() => {
      this.currentTimeMs++;
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }

  getMilliseconds() {
    let milliseconds = this.currentTimeMs/10;
    return milliseconds;
  }

  twoDigitsNumber(num) {
    if(num <= 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  // threeDigitNumber(num) {
  //   if(num <= 9) {
  //     return `00${num}`;
  //   } else if(num > 9 && num <= 99) {
  //     return `0${num}`;
  //   } else {
  //     return `${num}`;
  //   }
  // }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMs);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMs = 0;
  }

  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    // const milliseconds = this.threeDigitNumber(this.getMilliseconds());
    const milliseconds = this.getMilliseconds();
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}




// class Chronometer {
//   constructor() {
//     this.currentTime = 0;
//     this.intervalId = 0;
//   }

//   startClick(){
//     this.intervalId = setInterval(() => {
//       this.currentTime++;
//     }, 1000);
//   }

//   getMinutes() {
//     let minutes = Math.floor(this.currentTime/60);
//     return minutes;
//   }

//   getSeconds() {
//     let seconds = this.currentTime - this.getMinutes() * 60;
//     return seconds;
//   }

//   getMilliseconds() {
//     let milliseconds = this.currentTime
//   }

//   twoDigitsNumber(num) {
//     if(num <= 9) {
//       return `0${num}`;
//     } else {
//       return `${num}`;
//     }
//   }

//   stopClick() {
//     clearInterval(this.intervalId);
//   }

//   resetClick() {
//     this.currentTime = 0;
//   }

//   splitClick() {
//     const minutes = this.twoDigitsNumber(this.getMinutes());
//     const seconds = this.twoDigitsNumber(this.getSeconds());
//     return `${minutes}:${seconds}`;
//   }
// }