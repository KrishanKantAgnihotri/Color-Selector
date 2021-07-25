const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'aqua', 'grey', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'chartreuse', 'chocolate'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let flag = true;
const hex = document.getElementById("hex");
const simple = document.getElementById("simple");
let colorsimple = "#2262B4";
let colorhex = "#f1f5f8";
hex.addEventListener("click", function () {
    hex.style.background = colorsimple;
    hex.style.color = colorhex;
    simple.style.background = colorhex;
    simple.style.color = colorsimple;
    [colorhex, colorsimple] = [colorsimple, colorhex]
    flag = (flag) ? false : true;
});
simple.addEventListener("click", function () {
    hex.style.background = colorsimple;
    hex.style.color = colorhex;
    simple.style.background = colorhex;
    simple.style.color = colorsimple;
    [colorhex, colorsimple] = [colorsimple, colorhex]
    flag = (flag) ? false : true;;

});
const color = document.querySelector("#text");
btn.addEventListener("click", function () {

    // console.log(flag);
    if (flag) {
        const randomNumber = Math.floor(Math.random() * colors.length);

        document.getElementsByClassName("container")[0].style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    }
    else {
        let colors = "#";
        for (let i = 0; i < 6; i++) {
            colors += (nums[Math.floor(Math.random() * nums.length)]);
        }
        document.getElementsByClassName("container")[0].style.backgroundColor = colors;
        color.textContent = colors;

    }


});
