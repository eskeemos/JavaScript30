const videoC = document.querySelector(".video-cont");
const totalTime = document.querySelector(".ClipTime");
const videoTime = ["5:43", "2:33", "4:23", "9:02","3:45", "0:47", "5:21", "6:56", "3:46", "5:25", "3:14", "3:31", "5:59", "3:07", "11:29", "8:57", "5:49", "5:52", "5:50", "9:13", "11:51", "7:58", "4:40", "4:45", "6:46", "7:24", "7:12", "5:23", "3:34", "8:22", "5:17", "3:10", "4:43", "19:43", "0:47", "0:47", "3:14", "3:59", "2:43", "4:17", "6:56", "3:05", "2:06", "1:59", "1:49", "3:36", "7:10", "3:44", "3:44", "4:36", "3:16", "1:10", "6:10", "2:14", "3:44", "5:05", "6:03", "12:39", "1:56", "4:04"];

videoC.innerHTML = videoTime.map((item,i) => {
    return `<a href=""><li data-time="${item}">Video : ${i + 1}</li></a>`;
}).join("");

const time = videoTime
    .map((item) => {
        const [min, sec] = item.split(":").map(parseFloat);
        return min * 60 + sec;
    })
    .reduce((item,total) => {
        return total += item;
    })


let secondsLeft = time;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const minutes = Math.floor(secondsLeft / 60);
const seconds = (secondsLeft %= 60);

totalTime.innerHTML = `
    Total Clip Time :<h1>
    ${hours}<sup>hours</sup> : 
    ${minutes}<sup>minutes</sup> : 
    ${seconds}<sup>seconds</sup></h1>`;
    
console.log(`Clip Time - ${hours} : ${minutes} : ${seconds}`);