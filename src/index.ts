let time = document.getElementById("time") as HTMLElement;
let day = document.getElementById("day") as HTMLElement;
let m: number | String;
let h: number | String;
let s: number | String;
let ampm: String;

// !! Get the days
const getDays = (daysNum: number) => {
  switch (daysNum) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";
  }
};

// !! Get the Months
const getMonts = (monthNu: number) => {
  switch (monthNu) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

// !! Handle the Ties and Dates
const handleTime = () => {
  const date = new Date();
  m = date.getMinutes();
  s = date.getSeconds();
  h = date.getHours();
  ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h === 0 ? (h = 12) : h;
  h = h < 10 ? `0${h}` : h;
  s = s < 10 ? `0${s}` : s;
  m = m < 10 ? `0${m}` : m;
  time.innerText = `${h}:${m}:${s} ${ampm}`;
  day.innerText = `${getDays(date.getDay())}, ${date.getDate()} ${getMonts(
    date.getMonth()
  )} ${date.getFullYear()}`;
};

// !! Call the function after a second
setInterval(() => handleTime(), 1000);
