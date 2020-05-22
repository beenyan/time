function fill_zero(x,len){ //補0
    x = (x).toString();
    while (x.length < len) x = "0" + x;
    return x;
}
function get_time(time){
    return {
        h: fill_zero(parseInt(time / 3600000) % 60,2),
        m: fill_zero(parseInt(time / 60000) % 60,2),
        s: fill_zero(parseInt(time / 1000) % 60,2),
        ms: fill_zero(time % 1000,3)
    };
}