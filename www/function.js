function fill_zero(x,len){
    x = (x).toString();
    while (x.length < len) x = "0" + x;
    return x;
}
function settime(){
    now_time.hour = fill_zero(parseInt(increase / 3600000) % 60,2);
    now_time.minute = fill_zero(parseInt(increase / 60000) % 60,2);
    now_time.second = fill_zero(parseInt(increase / 1000) % 60,2);
    now_time.millisecond = fill_zero(parseInt(increase / 10) % 100,2);
}