var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function () {
    document.write("wrong!\nLook at the output below:\n<br>");
    document.write(('b' + 'a' + +'a' + 'a').toLowerCase());
});

btn2.addEventListener("click", function () {
    document.write("wrong!\nLook at the output below:\n<br>");
    document.write(('b' + 'a' + +'a' + 'a').toLowerCase());
});

btn3.addEventListener("click", function () {
    document.write("correct! The code gives:\n<br>");
    document.write(('b' + 'a' + +'a' + 'a').toLowerCase());
    document.write("<br><br>This is because the +'a' in 'b' + 'a' + +'a' + 'a' gives out 'NaN'. Without the toLowerCase() part, it would output baNaNa.")
});

btn4.addEventListener("click", function () {
    document.write("wrong!\nLook at the output below:\n<br>");
    document.write(('b' + 'a' + +'a' + 'a').toLowerCase());
});