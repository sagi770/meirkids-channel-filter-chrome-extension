
if(document.getElementById("display-video-section")){
    if(document.getElementById("display-video-section").innerHTML.indexOf("פספוסים") !== -1){
        document.getElementById("display-video-section").innerHTML = "לא ניתן להפעיל פספוסים";
        document.getElementById("display-video-section").style.cssText = "text-align: center; font-size: 60px; font-weight: bold; position: sticky; color: #fff; top: 90px; z-index: 1111;"
    }
}

if(window.location.href.indexOf(encodeURI("משחקים")) > -1){
    document.getElementById("recent-games").innerHTML = "לא ניתן להפעיל משחקים";
    document.getElementById("recommended-games").innerHTML = "";
    document.getElementById("all-games").innerHTML = "";
    document.getElementById("recent-games").style.cssText = "text-align: center;font-size: 60px; font-weight: bold;padding-bottom: 50px;"
}

if(window.location.href.indexOf("Games") > -1){
    document.getElementById("single-game-page").innerHTML = "לא ניתן להפעיל משחקים";
    document.getElementById("single-game-page").style.cssText = "text-align: center; font-size: 60px; font-weight: bold; position: sticky; color: black; top: 90px; z-index: 1111;"
}


