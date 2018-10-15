let data = {
    title: "text",
    height: 20,
    width: 15
};

function show({title, width = 50, height = 100, deep = 20}) {
    console.log(`${title} ${width} x ${height} x ${deep}`);
}

show(data);

data = {
    height: 20,
    width: 15
};
show({title: "test_value"});
console.log(show.name);