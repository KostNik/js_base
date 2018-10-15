var array = [1.2, "text", false, function (t_param) {
    console.log(t_param);
}];

array.forEach(function (value) {
    console.log(value);
}) ;

array[3]('CALL_FUNCTION');