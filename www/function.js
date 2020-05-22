function fill_zero(x,len){
    x = (x).toString();
    while (x.length < len) x = "0" + x;
    return x;
}