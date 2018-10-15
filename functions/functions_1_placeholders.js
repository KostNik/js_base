function show(title = "w/o title", width = 10, height = 20) {
    console.log(`${title} ${width} --- ${height}`);
}

show("W_title");
show(undefined, undefined, 77);
show();

function show_1(title = "w/o title", second, ...rest) {
    console.log(`${title} ${second} --- ${rest}`);
}

show_1("W_title");
show_1(undefined, undefined, undefined, undefined, "add smth", undefined, "once more");
show_1();
