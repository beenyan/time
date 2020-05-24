$('body').on('click','#start', () => {
    main_time = +new Date() - different_time;
    sub_time = +new Date() - different_sub_time;
    start = !start;
    reset = !reset;
    $('#start').text((start)?'暫停':'繼續');
    $('#reset').text((reset)?'跳題':'重置');
})
$('body').on('click','#split', () => { //分割
    if (!different_time||!different_sub_time) return false; //總時間或分割時間為0 不進行分割
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
    if (!reset){ //重製
        start = 0;
        $('.list').remove();
        $('#start').text('開始');
        $('#big').text('00:00:00');
        $('#middle').text('.000');
        $('#small').text('00:00:00');
        $('#slime').text('.000');
        main_time = 0;
        sub_time = 0;
        different_time = 0;
        different_sub_time = 0;
        split_index = 1;
        reset = 1;
    }
    else { //跳題
        sub_time = +new Date();
        different_sub_time = 0;
        $('#small').text('00:00:00');
        $('#slime').text('.000');
    }
})
$('#split_place').sortable({
    stop: () => {
        $('.list').each((index,e)=>{
            $(e).children(':eq(0)').text(`#${index+1}`);
        })
    }
});
