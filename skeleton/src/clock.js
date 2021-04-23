import { htmlGenerator } from "./warmup";

const clockElement = document.querySelector("#clock");

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.seconds = date.getSeconds();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    htmlGenerator(timeString, clockElement);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this._inSeconds();
    this.printTime();
  }

  _addMinute() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._addHour();
    }
  }

  _addHour() {
    this.hours += 1;
    this.hours = this.hours % 24;
  }
  _inSeconds() {
    this.seconds = this.seconds + 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._addMinute();
    }
  }
}

const clock = new Clock();

// module.exports = Clock;
