

function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    console.log(E)
    if (h>=5 && h<12){
        E.innerHTML = " Good Morning, I am Andrews Akwei";
    } else if (h>=12 && h<18){
        E.innerHTML = " Good Afternoon, I am Andrews Akwei";
    } else if (h>=18 && h < 20){
        E.innerHTML = " Good Evening, I am Andrews Akwei"
    } else {
        E.innerHTML = " Good Evening, I am Andrews Akwei"
    }
}

greetingFunc();

function addYear(){
    var d=new Date();
    var y=d.getFullYear();
    var E=document.getElementById("copyYear");
    E.innerHTML+=y
}

// function showList(){
//     document.getElementById("FavList").style.display="block";
//     document.getElementById("SeeMoreBTN").style.display="none";
// }

// function showList2(){
//     document.getElementById("FavList2").style.display="block";
//     document.getElementById("SeeMoreBTN2").style.display="none";
// }

$("#readLess").click(function(){
    $("#mediumIntro").hide();
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#mediumIntro").show();
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
})

function validate() {
    var user = document.getElementById("name");
    var email = document.getElementById("email");
    var text = document.getElementById("comment");
    var msg=document.getElementById("ValidateMsg");
    if (!user.checkValidity()||!email.checkValidity()||!text.checkValidity()) {
        msg.innerHTML="Please Fill Out The Form Correctly So I Can Get Back To You";
    }
  }

  let map;

  async function initMap(){
    const position = {lat: 40.45146870585659,  lng: -79.93269420263117}
    const{Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");
    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: position,
        mapid: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Pamala's Family Diner"
    })
  }

  function activeNav(){
    var x = document.getElementById("myTopnav");
    if (x.className==="topnav"){
        x.className+="responsive";
    }else{
        x.className = 'topnav'
    }
  }

  initMap();