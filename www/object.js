$('body').on('click','#start', () => {
    main_time = +new Date() - different_time;
    sub_time = +new Date() - different_sub_time;
    start = !start;
    if (start){
        $('#start').text('暫停');
    }
    else {
        $('#start').text('繼續');
    }
})
$('body').on('click','#split', () => {
    let main = get_time(different_time);
    let sub = get_time(different_sub_time);
    $('#split_place').append(`
    <div class='list'>
        <div>#${split_index}</div>
        <div><span class='split_main_text'>${sub.h}:${sub.m}:${sub.s}</span><span class='split_sub_text'>.${sub.ms}</span></div>
        <div><span class='split_main_text'>${main.h}:${main.m}:${main.s}</span><span class='split_sub_text'>.${main.ms}</span></div>
    </div>
    `);
    split_index++;
    // 分割時間歸0
    sub_time = +new Date();
    different_sub_time = 0;
    $('#small').text('00:00:00');
    $('#slime').text('.000');
})
$('body').on('click','#reset', () => {
    start = 0;
    $('.list').remove();
    $('#big').text('00:00:00');
    $('#middle').text('.000');
    $('#small').text('00:00:00');
    $('#slime').text('.000');
    main_time = 0;
    sub_time = 0;
    different_time = 0;
    different_sub_time = 0;
    split_index = 1;
})