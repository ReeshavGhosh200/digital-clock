const container = document.getElementById("con");
const timer = document.getElementById("timer");
const fontButtons = document.getElementsByClassName("f");
const info = document.getElementById("info");
const cusBut = document.getElementById("cus");
const customize = document.getElementById("customize");
const backOptions = document.getElementById("back_op");

//clock
function update() {
    const curTime = new Date();

    let hours = curTime.getHours();
    let minutes = curTime.getMinutes();
    let seconds = curTime.getSeconds();
    let metric = '';

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let year = curTime.getFullYear();
    let month = months[curTime.getMonth()];
    let day = days[curTime.getDay()];
    let date = curTime.getDate();

    // Get the selected time zone
    const selectedTimeZone = document.getElementById("timezone").value;
    const options = { timeZone: selectedTimeZone };

    // Convert the current time to the selected time zone
    const timeZoneTime = new Date(curTime.toLocaleString('en-US', options));

    // Extract hours, minutes, and seconds from the converted time
    hours = timeZoneTime.getHours();
    minutes = timeZoneTime.getMinutes();
    seconds = timeZoneTime.getSeconds();

    // Format hours for 12-hour or 24-hour based on user selection
    if (document.getElementById("24").checked) {
        metric = ''; // No metric for 24-hour format
    } else {
        if (hours > 12) {
            hours -= 12;
            metric = 'PM';
        } else if (hours === 0) {
            hours = 12;
            metric = 'AM';
        } else {
            metric = 'AM';
        }
    }

    // Format minutes and seconds with leading zeros
    minutes = formatZeros(minutes);
    seconds = formatZeros(seconds);
    hours = formatZeros(hours)

    // Update clock display
    timer.innerHTML = `${hours}:${minutes}:${seconds} ${metric}`;
    info.innerHTML = `${month} ${date} ${year}, ${day}`;

    // Format hours to 24-hour format
    function formatZeros(timeGiven) {
        if (timeGiven < 10) {
            return "0" + timeGiven;
        }
        return timeGiven;
    }
}


//customization

//format
const radioButtons = document.querySelectorAll('input[name="timeF"]');
radioButtons.forEach(button => {
    button.addEventListener('change', update);
});

update();
setInterval(update, 1000);


//timer font
fontButtons[0].addEventListener("click", () => timer.style.fontFamily = "font1");
fontButtons[1].addEventListener("click", () => timer.style.fontFamily = "font2");
fontButtons[2].addEventListener("click", () => timer.style.fontFamily = "font2_2");
fontButtons[3].addEventListener("click", () => timer.style.fontFamily = "font2_3");
fontButtons[4].addEventListener("click", () => timer.style.fontFamily = "font3");
fontButtons[5].addEventListener("click", () => timer.style.fontFamily = "font4");
fontButtons[6].addEventListener("click", () => timer.style.fontFamily = "font5");
fontButtons[7].addEventListener("click", () => timer.style.fontFamily = "font6");
fontButtons[8].addEventListener("click", () => timer.style.fontFamily = "font7");
fontButtons[9].addEventListener("click", () => timer.style.fontFamily = "font8");
fontButtons[10].addEventListener("click", () => timer.style.fontFamily = "font1_2");
fontButtons[11].addEventListener("click", () => timer.style.fontFamily = "font1_3");
fontButtons[12].addEventListener("click", () => timer.style.fontFamily = "font1_4");
fontButtons[13].addEventListener("click", () => timer.style.fontFamily = "arial");
fontButtons[14].addEventListener("click", () => timer.style.fontFamily = "consolas");

// info font
fontButtons[0].addEventListener("click", () => info.style.fontFamily = "font1");
fontButtons[1].addEventListener("click", () => info.style.fontFamily = "font2");
fontButtons[2].addEventListener("click", () => info.style.fontFamily = "font2_2");
fontButtons[3].addEventListener("click", () => info.style.fontFamily = "font2_3");
fontButtons[4].addEventListener("click", () => info.style.fontFamily = "font3");
fontButtons[5].addEventListener("click", () => info.style.fontFamily = "font4");
fontButtons[6].addEventListener("click", () => info.style.fontFamily = "font5");
fontButtons[7].addEventListener("click", () => info.style.fontFamily = "font6");
fontButtons[8].addEventListener("click", () => info.style.fontFamily = "font7");
fontButtons[9].addEventListener("click", () => info.style.fontFamily = "font8");
fontButtons[10].addEventListener("click", () => info.style.fontFamily = "font1_2");
fontButtons[11].addEventListener("click", () => info.style.fontFamily = "font1_3");
fontButtons[12].addEventListener("click", () => info.style.fontFamily = "font1_4");
fontButtons[13].addEventListener("click", () => info.style.fontFamily = "arial");
fontButtons[14].addEventListener("click", () => info.style.fontFamily = "consolas");

// customize button
let on = false;
function hideOrShow(){
    if(on){
        on = false;
        customize.style.display = "none";
        cusBut.innerHTML = "Customize clock &rightarrow;";
        container.style.height = "100vh";
        cusBut.style.bottom = "50px";
    } else {
        on = true;
        customize.style.display = "block";
        cusBut.innerHTML = "Customize clock &uparrow;";
        container.style.height = "50vh";
        cusBut.style.bottom = "0";
    }
}
cusBut.addEventListener("click", hideOrShow);

// options  for background
backOptions.addEventListener("change", e => {
    let selected = e.target.value;
    if(selected === "sc"){
        document.getElementById("sc").style.display = "block";
        document.getElementById("lg").style.display = "none";
        document.getElementById("rg").style.display = "none";
        container.classList.remove("animation_back");
    } else if(selected === "lg"){
        document.getElementById("sc").style.display = "none";
        document.getElementById("lg").style.display = "block";
        document.getElementById("rg").style.display = "none";
        container.classList.remove("animation_back");
    }  else if(selected === "rg"){
        document.getElementById("sc").style.display = "none";
        document.getElementById("lg").style.display = "none";
        document.getElementById("rg").style.display = "block";
        container.classList.remove("animation_back");
    } else if(selected === "def"){
        document.getElementById("sc").style.display = "none";
        document.getElementById("lg").style.display = "none";
        document.getElementById("rg").style.display = "none";
        container.classList.remove("animation_back");
    } else if(selected === "rain"){
        document.getElementById("sc").style.display = "none";
        document.getElementById("lg").style.display = "none";
        document.getElementById("rg").style.display = "none";
        container.classList.add("animation_back");
    }
});

//background color functions
//solid color
document.getElementById("apply").addEventListener("click", () => {
    let color = document.getElementById("col").value;
    container.style.background = color;
});
//linear gradient
document.getElementById("apply2").addEventListener("click", () => {
    let color = document.getElementById("l_col_1").value;
    let color2 = document.getElementById("l_col_2").value;
    let rotation = document.getElementById("l_rot").value;
    container.style.background = `linear-gradient(${rotation}deg, ${color}, ${color2})`;
});
//radial gradient
document.getElementById("apply3").addEventListener("click", () => {
    let color = document.getElementById("r_col_1").value;
    let color2 = document.getElementById("r_col_2").value;
    let per = document.getElementById("r_per").value;
    container.style.background = `radial-gradient(${color}, ${per}%, ${color2})`
});

//text colors
document.getElementById("apply4").addEventListener("click", function(){
    let color = document.getElementById("c_c").value;
    let infoColor = document.getElementById("info_c").value;
    timer.style.color = color;
    info.style.color = infoColor;
})
// rainbow
document.getElementById("rain").addEventListener("change", function() {
    let temp = document.getElementById("rain").checked;
    if(temp){
        timer.classList.add("animation_col");
        info.classList.add("animation_col");
    } else {
        timer.classList.remove("animation_col");
        info.classList.remove("animation_col");
    }
})

//showcase
document.getElementById("showcase").addEventListener("click", function () {
    let temp = window.confirm("Are you sure you want to proceed");
    if(temp){
        alert(`Proceeded, press F11 for better experience
Hit escape to show Customize button`);
        cusBut.style.visibility = "hidden";
        customize.style.display = "none";
        container.style.position = "static";
        container.style.height = "100vh";
        container.style.cursor = "none";
        hideOrShow();
    }
})
window.addEventListener("keydown", e => {
    if(e.key === "Escape" || e.key == "esc"){
        cusBut.style.visibility = "visible";
        container.style.cursor = "default";
    }
})

//size
document.getElementById("size").addEventListener("change" , function(){
    let size = Number(document.getElementById("size").value);
    timer.style.fontSize = size+"px";
    console.log(size);
})

// themes
//red
document.getElementById("red").addEventListener("click", function() {
    timer.style.color = "orange";
    info.style.color = "rgb(255, 255, 0)";
    container.style.background = "linear-gradient(90deg ,red, orange)"
})
//maroon
document.getElementById("orange").addEventListener("click", function() {
    timer.style.color = "rgb(201, 71, 71)";
    info.style.color = "brown";
    container.style.background = "linear-gradient(45deg ,rgb(99, 62, 62), 50%, maroon)"
})
//yellow
document.getElementById("yellow").addEventListener("click", function() {
    timer.style.color = "yellow";
    info.style.color = "yellowgreen";
    container.style.background = "radial-gradient(black, 50%,  yellow)"
})
//fuchsia
document.getElementById("fuchsia").addEventListener("click", function() {
    timer.style.color = "fuchsia";
    info.style.color = "deeppink";
    container.style.background = "radial-gradient(rgb(119, 39, 119), fuchsia)"
})
//blue
document.getElementById("blue").addEventListener("click", function() {
    timer.style.color = "darkblue";
    info.style.color = "skyblue";
    container.style.background = "linear-gradient(45deg, dodgerblue, blue)"
})
//lime
document.getElementById("lime").addEventListener("click", function() {
    timer.style.color = "lawngreen";
    info.style.color = "lime";
    container.style.background = "linear-gradient(45deg, green, lightgreen)"
})
//aqua
document.getElementById("aqua").addEventListener("click", function() {
    timer.style.color = "aqua";
    info.style.color = "blue";
    container.style.background = "radial-gradient(rgb(39, 107, 107), aquamarine)"
})

//background image
document.getElementById('file').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const errorMessage = document.getElementById('baje');
  
    if (!file || !file.type.match('image.*')) {
        errorMessage.innerText = 'Please upload a valid Image';
        container.style.backgroundImage = 'none';
    } else {
        errorMessage.innerText = '';
        const reader = new FileReader();
        reader.onload = function(e) {
            container.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    }
});

//reset
document.querySelector(".reset").addEventListener("click", () => {
    let temp = confirm("Are you sure you want reset the clock?");
    if(temp){
        timer.style.fontFamily="arial";
        info.style.fontFamily="arial";
        container.style.fontSize = "16px";
        container.style.background = "#fff";
        timer.style.color = "black";
        info.style.color = "black";
    }
});

//shadow
document.getElementById("apply7").addEventListener("click", () => {
    let off_x = document.getElementById("off_x").value;
    let off_y = document.getElementById("off_y").value;
    let off_col = document.getElementById("off_col").value;

    timer.style.textShadow = `${off_x}px ${off_y}px ${off_col}`;
    info.style.textShadow = `${off_x}px ${off_y}px ${off_col}`;
});
document.getElementById("apply8").addEventListener("click", () => {
    timer.style.textShadow = `none`;
    info.style.textShadow = `none`;
});

//text alignment
document.getElementById("left").addEventListener("change", () => container.style.alignItems = "start");
document.getElementById("center").addEventListener("change", () => container.style.alignItems = "center");
document.getElementById("right").addEventListener("change", () => container.style.alignItems = "end");

document.getElementById("top").addEventListener("change", () => container.style.justifyContent = "start");
document.getElementById("center2").addEventListener("change", () => container.style.justifyContent = "center");
document.getElementById("bottom").addEventListener("change", () => container.style.justifyContent = "end");
