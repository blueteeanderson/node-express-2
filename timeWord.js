const teens = {
    "10" : "ten",
    "11" : "eleven",
    "12" : "twelve",
    "13" : "thirteen",
    "14" : "fourteen",
    "15" : "fiften",
    "16" : "sixteen",
    "17" : "seventeen",
    "18" : "eighteen",
    "19" : "nineteen"
}
const minPrefix = {
    0 : "oh",
    2 : "twenty" ,
    3 : "thirty",
    4 : "forty",
    5 : "fifty"
}
const minOrHour = {
    0 : "",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    "00" : "twelve"
}

function timeToWord(time) {
    if(time === "00:00") {
        return "midnight";
    } else if(time === "12:00") {
        return "noon";
    } else {
        let mins,hour,ampm;
        //split hours and mins
        const strTimeParts = time.split(":");
        //convert string to number
        let numTimeParts = strTimeParts.map(e => {
            return Number(e)
        });
        //determin if am pm
        ampm = numTimeParts[0]<12 ? "am" : "pm";
        if(ampm === "pm") {
            //if pm convert to 12 hour clock
            if(numTimeParts[0]>12)
                numTimeParts[0] = numTimeParts[0] - 12;
        }
        //set the hour
        hour =  numTimeParts[0]===0 ? minOrHour[strTimeParts[0]] : minOrHour[numTimeParts[0]];

        //---------set minutes-----------
        //because one is a unique case
        if(strTimeParts[1] === "00") {
            mins =  "o’clock"
        } else if(strTimeParts[1][0] === "1") {
            mins = teens[strTimeParts[1]];
        } else {
            //get prefix
            let prefix = minPrefix[strTimeParts[1][0]];
            let min = minOrHour[Number(strTimeParts[1][1])];
            mins = `${prefix} ${min}`
        }
        return `${hour} ${mins.trim()} ${ampm}`;
    }
}

module.exports = timeToWord;