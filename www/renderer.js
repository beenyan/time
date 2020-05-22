let set_time = +new Date();
let increase = 0;
setInterval(e => {
    let count_time = +new Date() - set_time;
    $("#big").text(`${fill_zero(parseInt(count_time / 3600000) % 60,2)}:${fill_zero(parseInt(count_time / 60000) % 60,2)}:${fill_zero(parseInt(count_time / 1000) % 60,2)}`);
    $("#middle").text(`.${fill_zero(count_time % 1000,3)}`);
},1);