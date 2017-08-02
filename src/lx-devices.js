function getWidth(width, height, ratio, defaultWidth){
    if (width) return width;
    if (height) {
        var splitHeight = height.split(/(\d+)/); // if input is "100px" this return ['', '100', 'px']
        return parseInt(splitHeight[1], 10) * ratio + splitHeight[2];
    }
    return defaultWidth;
}

function getHeight(width, height, ratio, defaultHeight){
    if (height) return height;
    if (width) {
        var splitWidth = width.split(/(\d+)/); // if input is "100px" this return ['', '100', 'px']
        return parseInt(splitWidth[1], 10) * ratio + splitWidth[2];
    }
    return defaultHeight;
}

function getTopbar(inner, bgColor, color, justifyContent){
    return '<div class="lx-topbar" style="line-height: normal; border-top-left-radius: inherit; border-top-right-radius: inherit; background-color: ' + bgColor + '; color: ' + color + '; font-family: \'Roboto\', sans-serif; height: 1.5rem; font-size: 0.85rem; display: flex; justify-content: ' + justifyContent + '; align-items: center;">' + inner + '</div>';
}

function getBottombar(){
    var svgBack2 = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20px" viewBox="0 0 24 24" width="20px"> <g transform="rotate(270 12 12)"> <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/> <path d="M0 0h24v24H0V0z" fill="none"/> </g> </svg>';
    var svgHome = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="18px" viewBox="0 0 24 24" width="18px"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/> </svg>';
    var svgMenu = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="22px" viewBox="0 0 24 24" width="22px"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/> </svg>';

    return '<div class="lx-bottombar" style="padding: 0 1rem; background-color: #13171a; display: flex; justify-content: space-around; height: 1.8rem; align-items: center; border-bottom-right-radius: inherit; border-bottom-left-radius: inherit;">' + svgBack2 + svgHome + svgMenu + '</div>';
}

function getScreen(inner, isBottomRounded){
    var rounded = isBottomRounded ? 'border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;' : '';
    return '<div class="lx-screen" style="flex: 1; width:100%; height: 100%; overflow: auto;' + rounded + '">' + inner + '</div>';
}

function getAndroidIcons(){
    var svgWifi = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16px" viewBox="0 0 24 24" width="20px"> <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>';
    var svgCell = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16px" viewBox="0 0 24 24" width="20px"> <path d="M2 22h20V2z"/> <path d="M0 0h24v24H0z" fill="none"/> </svg>';
    var svgBattery = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16px" viewBox="0 0 24 24" width="20px"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/> </svg>';
    return svgWifi + svgCell + svgBattery;
}

var TIME = '<span class="lx-time" style="padding: 0 0.4rem 0 0.1rem;"></span>';

var osxIcons = '<span style="display: flex; align-items: center;"> <div style="width: 0.7rem; height: 0.7rem; border-radius: 50%; background-color: #fc5753; margin-right: 6px; margin-left: 8px"></div><div style="width: 0.7rem; height: 0.7rem; border-radius: 50%; background-color: #fdbc40; margin-right: 6px"></div><div style="width: 0.7rem; height: 0.7rem; border-radius: 50%; background-color: #33c748;"></div></span>';

var svgWifi = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 500 500" enable-background="new 0 0 500 500"> <g> <path d="M249.702,73.757C152.685,73.757,64.662,112.534,0,175.539L63.439,239.5c50.366-48.823,116.289-75.651,186.263-75.651   c70.057,0,136.049,26.892,186.438,75.824L500,176.125C435.284,112.777,347.02,73.757,249.702,73.757z"/> <path d="M92.053,268.351l63.51,64.034c25.095-23.343,58.06-37.555,94.139-37.555c35.866,0,68.647,14.051,93.686,37.143   l63.948-63.638c-41.41-39.467-96.783-63.595-157.634-63.595C188.846,204.74,133.466,228.875,92.053,268.351z"/> <path d="M186.248,363.324l62.41,62.919l63.834-63.522c-17.072-14.87-38.943-23.803-62.79-23.803   C225.543,338.918,203.417,348.098,186.248,363.324z"/> </g> </svg>';

var svgBattery = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 200" width="32px" height="32px"><path id="path0" d="M57.500 46.418 C 53.701 48.130,47.444 54.636,46.060 58.315 C 44.358 62.837,44.624 151.170,46.352 155.282 C 48.570 160.559,56.078 166.744,61.144 167.468 C 63.540 167.810,123.360 167.957,194.078 167.795 L 322.656 167.500 326.367 164.669 C 328.409 163.112,331.298 159.995,332.789 157.742 L 335.500 153.646 335.500 106.500 L 335.500 59.354 332.789 55.258 C 331.298 53.005,328.409 49.888,326.367 48.331 L 322.656 45.500 191.578 45.283 C 83.250 45.104,59.979 45.301,57.500 46.418 M315.594 52.590 C 316.746 52.899,320.121 55.915,323.094 59.293 L 328.500 65.434 328.500 106.500 L 328.500 147.566 323.031 153.779 C 315.945 161.829,329.680 161.117,187.694 160.788 L 63.889 160.500 57.944 154.350 L 52.000 148.199 52.000 106.433 L 52.000 64.667 58.333 58.333 L 64.667 52.000 189.083 52.014 C 257.512 52.021,314.442 52.280,315.594 52.590 M62.368 62.368 L 58.000 66.737 58.000 106.500 L 58.000 146.263 62.380 150.643 L 66.760 155.023 190.863 154.762 L 314.967 154.500 318.733 150.733 L 322.500 146.966 322.500 106.411 L 322.500 65.856 318.289 61.928 L 314.077 58.000 190.407 58.000 L 66.737 58.000 62.368 62.368 M345.000 84.729 C 342.251 85.776,342.031 87.388,342.031 106.500 C 342.031 116.950,342.361 125.983,342.765 126.573 C 345.282 130.248,350.686 128.470,355.588 122.353 C 364.829 110.821,362.725 94.205,351.016 86.250 C 347.515 83.872,347.357 83.832,345.000 84.729 " stroke="none" fill="#000000" fill-rule="evenodd"/></svg>';


var iosTopleft = '<span style="display: flex; align-items: center;"> <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: black; margin-right: 2px; margin-left: 8px"></div><div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: black; margin-right: 2px"></div><div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: black; margin-right: 2px"></div><div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: black; margin-right: 2px"></div><div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background-color: black; margin-right: 6px"></div>' + svgWifi + '</span>';
var iosTopright = '<span style="display:flex; align-items: center;"><span>100%</span><span>' + svgBattery + '</span></span>';

var shadowList = [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
];

function generalOperation(node){
    if(node.dataset.shadow){
        node.style.boxShadow = shadowList[parseInt(node.dataset.shadow, 10) + 1];
    }
    node.style.display = "flex";
    node.style.flexDirection = "column";
}

var android = document.getElementsByClassName('lx-android');
var ios = document.getElementsByClassName('lx-ios');
var osx = document.getElementsByClassName('lx-osx');

for(var i = 0; i < android.length; i++){
    generalOperation(android[i]);

    android[i].style.width = getWidth(android[i].dataset.width, android[i].dataset.height, 9/16, "225px");
    android[i].style.height = getHeight(android[i].dataset.width, android[i].dataset.height, 16/9, "400px");
    var topbar = getTopbar(getAndroidIcons() + TIME, '#13171a', 'white', 'flex-end');
    android[i].innerHTML = topbar + getScreen(android[i].innerHTML, false) + getBottombar();
}

for(var i = 0; i < ios.length; i++){
    generalOperation(ios[i]);

    ios[i].style.width = getWidth(ios[i].dataset.width, ios[i].dataset.height, 9/16, "225px");
    ios[i].style.height = getHeight(ios[i].dataset.width, ios[i].dataset.height, 16/9, "400px");
    var topbar = getTopbar(iosTopleft + TIME + iosTopright, '#f7f7f7', 'black', 'space-between');
    ios[i].innerHTML =  topbar + getScreen(ios[i].innerHTML, true);
}

for(var i = 0; i < osx.length; i++){
    generalOperation(osx[i]);

    osx[i].style.width = getWidth(osx[i].dataset.width, osx[i].dataset.height, 3/2, "480px");
    osx[i].style.height = getHeight(osx[i].dataset.width, osx[i].dataset.height, 2/3, "320px");
    var osxTitle = osx[i].dataset.title ? '<span style="margin-left: -3rem">' + osx[i].dataset.title + '</span>' : '';
    var topbar = getTopbar(osxIcons + osxTitle + '<span></span>', '#f0f0f5', 'black', 'space-between');
    osx[i].innerHTML = topbar + getScreen(osx[i].innerHTML, true);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i; 
    }
    return i;
}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    var clocks = document.getElementsByClassName('lx-time');
    for (var i = 0; i < clocks.length; i++) {
        clocks[i].innerHTML = h + ":" + m;
    }
    setTimeout(function () {
        startTime();
    }, 20 * 1000);
}

if(android.length + ios.length + osx.length > 0) {
    startTime();
}
