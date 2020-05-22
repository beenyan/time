let now_time = {
    hour: "00",
    minute: "00",
    second: "00",
    millisecond: "000"
}
let increase = 0;
setInterval(e => {
    increase+=10;
    settime();
    $("#big").text(`${now_time.hour}:${now_time.minute}:${now_time.second}`);
    $("#middle").text(`.${now_time.millisecond}`);
},10);