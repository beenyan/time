/*
    計時方式使用：現在時間-開始計時的時間
*/
let main_time = 0,              //開始計時的時間(主要)
    sub_time = 0,               //開始計時的時間(分割)
    different_time = 0,         //時間差(主要)
    different_sub_time = 0,     //時間差(分割)
    temp,                       //各類暫存
    start = 0,                  //判斷是否開始計時
    split_index = 1

setInterval(e => {
    if (!start) return false;
    different_time = +new Date() - main_time;
    different_sub_time = +new Date() - sub_time;
    //主要時間設置
    temp = get_time(different_time);
    $("#big").text(`${temp.h}:${temp.m}:${temp.s}`);
    $("#middle").text(`.${temp.ms}`);
    //分割時間設置
    temp = get_time(different_sub_time);
    $("#small").text(`${temp.h}:${temp.m}:${temp.s}`);
    $("#slime").text(`.${temp.ms}`);
},1);