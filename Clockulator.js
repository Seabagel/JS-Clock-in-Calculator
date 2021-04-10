var clock12 = function (hour, minute, ampm) {
    this.hour = hour;
    this.minute = minute;
    this.ampm = ampm;

    this.convertMinute = function () {
        if (ampm == "pm") {
            this.minute += this.hour * 60 + (12 * 60);
        } else if (ampm == "am") {
            this.minute += this.hour * 60;
        }
        this.hour = 0;
    }

    this.convertHour = function () {
        if (this.minute >= 720) {
            this.ampm = "pm";
            this.hour = Math.floor(this.minute / 60) - 12;
            this.minute %= 60;
        } else {
            this.ampm = "am";
            this.hour = Math.floor(this.minute / 60);
            this.minute %= 60;
        }
    }
}

function findDifference(a, b) {
    a.convertMinute();
    b.convertMinute();
    var minuteA = a.minute, minuteB = b.minute;
    var diffHour, diffAmpm, diffText;
    var diffMinute = Math.abs(minuteA - minuteB);
    diffText = diffMinute.toString() + " in minutes\n";

    diffHour = Math.floor(diffMinute / 60);
    diffMinute %= 60;

    if (diffMinute >= 12 * 60) {
        diffAmpm = "pm";
    } else {
        diffAmpm = "am";
    }

    diffText += diffHour.toString() + " hours & " + diffMinute.toString() + " minutes";
    a.convertHour();
    b.convertHour();

    return diffText
}


var clockIn = new clock12(8, 0, "am");
var clockOut = new clock12(4, 30, "pm");

console.log(clockIn.hour, ":", clockIn.minute, clockIn.ampm);
console.log(clockOut.hour, ":", clockOut.minute, clockOut.ampm);

console.log(" ");

clockIn.convertMinute();
clockOut.convertMinute();
console.log(clockIn.hour, ":", clockIn.minute, clockIn.ampm);
console.log(clockOut.hour, ":", clockOut.minute, clockOut.ampm);

console.log(" ");

clockIn.convertHour();
clockOut.convertHour();
console.log(clockIn.hour, ":", clockIn.minute, clockIn.ampm);
console.log(clockOut.hour, ":", clockOut.minute, clockOut.ampm);

