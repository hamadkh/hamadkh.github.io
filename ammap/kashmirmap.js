// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
var starSVG = "M20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.272 L16.18,19 L14.545,11.971 L20,7.244 L20,7.244 Z M10,13.396 L6.237,15.666 L7.233,11.385 L3.91,8.507 L8.29,8.131 L10,4.095 L11.71,8.131 L16.09,8.507 L12.768,11.385 L13.764,15.666 L10,13.396 L10,13.396 Z";

var map = AmCharts.makeChart("mapdiv", {
    "type": "map",
    "dataProvider": {
        "mapURL": "ammap/svg/kmap.svg",
        "getAreasFromMap": true,
        "areas": [
          /* main kashmir map components*/
          /*AJK*/
          {title:"Muzaffarabad",id:"muzaffarabad",color:"#66CC99"},
          {title:"Mirpur",id:"mirpur",color:"#66CC99"},
          {title:"Bimbher",id:"Bimbher",color:"#66CC99"},
          {title:"Kotli",id:"Kotli",color:"#66CC99"},
          {title:"Neelum-valley",id:"Neelum-Valley",color:"#66CC99"},
          {title:"Sudhnoti",id:"sidhnoti",color:"#66CC99"},
          {title:"Bagh",id:"Bagh",color:"#66CC99"},
          {title:"Poonch-ajk",id:"poonch",color:"#66CC99"},
          /*GB & Chin components*/
          {title:"Baltistan",id:"Baltistan",color:"#ff4d4d"},
          {title:"Gilgit",id:"gilgit",color:"#ff4d4d"},
          {title:"Astore-Valley",id:"astore",color:"#ff4d4d"},
          {title:"Darel",id:"darel",color:"#ff4d4d"},
          {title:"Chilas",id:"chilas",color:"#ff4d4d"},
          {title:"Aksai-Chin",id:"aksai",pattern:
          {url:"https://www.amcharts.com/lib/3/patterns/black/pattern6.png",width:4,height:4}},
          {title:"Shanksgam",id:"shanksgam",pattern:
          {url:"https://www.amcharts.com/lib/3/patterns/black/pattern5.png",width:4,height:4}},
          {title:"Siachen-Glacier",id:"siachen",pattern:
          {url:"https://www.amcharts.com/lib/3/patterns/black/pattern4.png",width:4,height:4}},
          /*J&K*/
          {title:"Srinagar",id:"srinagar",color:"#aaaaff"},
          {title:"Kathua",id:"kathua",color:"#aaaaff"},
          {title:"Ladakh",id:"ladakh",color:"#aaaaff"},
          {title:"Srinagar",id:"srinagar",color:"#aaaaff"},
          {title:"Kargil",id:"kargil",color:"#aaaaff"},
          {title:"Baramullah",id:"baramullah",color:"#aaaaff"},
          {title:"Kupwara",id:"kupwara",color:"#aaaaff"},
          {title:"Doda",id:"doda",color:"#aaaaff"},
          {title:"Jammu",id:"jammu",color:"#aaaaff"},
          {title:"Badgam",id:"badgam",color:"#aaaaff"},
          {title:"Pulwama",id:"pulwama",color:"#aaaaff"},
          {title:"Anantang",id:"anantang",color:"#aaaaff"},
          {title:"Udhampur",id:"udhampur",color:"#aaaaff"},
          {title:"Rajauri",id:"rajauri",color:"#aaaaff"},
          {title:"Srinagar",id:"srinagar",color:"#aaaaff"},
          {title:"Poonch",id:"poonchjk",color:"#aaaaff"},
          /*inner map components*/
          /*Mirpur*/
          {title:"Mangla Reservior",id:"mangla",color:"#0077BE",pattern:
          {url:"http://cdn.onextrapixel.com/wp-content/uploads/2014/08/16-WaterWavesRetroPatterns.jpg",width:10,height:10}}
        ],
        "images": [ {"latitude": 34.003671,"longitude": 75.1555,"title": "Srinagar City (Summer Capital J&K)",
                      "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 34.259687,"longitude": 74.101054,"title": "Muzaffarabad City (Capital AJ&K)",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 32.726602,"longitude": 75.05000,"title": "Jammu City (Winter Capital J&K)",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 35.700154,"longitude": 74.708013,"title": "Gilgit City (Capital G&B)",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 35.290090,"longitude": 75.645343,"title": "Skardu City",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 34.149815,"longitude": 77.184076,"title": "Leh City",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5},
                    {"latitude": 34.324111,"longitude": 75.948987,"title": "Kargil City",
                    "svgPath": targetSVG,"zoomLevel": 5,"scale": 0.5}]
    },
    "imagesSettings": {"rollOverColor": "#008BFF","rollOverScale": 3,"selectedScale": 3,"selectedColor": "#008BFF",
    "color": "#13564e"},
   "balloon": {"adjustBorderColor": true,"cornerRadius": 5},
    "zoomControl": {"autoZoom": true,"zoomControlEnabled": true,"buttonIconColor": "#18BC9C","maxZoomLevel": 4},
    "areasSettings": {"autoZoom": true,"rollOverColor": "#ffae19","selectedColor": "#5EB7DE",
    "rollOverOutlineColor": "#FFFFFF","balloonText":"[[title]]"},
    /*"smallMap": {"backgroundColor": "#2098d1","borderColor": "#18BC9C","mapColor": "#fff",
    "rectangleColor": "#fff","borderThickness": 1,"size": 0.2,"top": 1},*/
    "listeners": [{
      "event": "clickMapObject",
      "method": function(event) {
        if (event.mapObject.svgPath !== undefined) {
          event.mapObject.svgPath = starSVG;
          event.mapObject.validate();
        }
      }
  }]
});

map.addListener("rollOverMapObject", function(event) {
    document.getElementById("info").innerHTML = '<p><b>' + event.mapObject.title;
});

map.addListener("clickMapObject", function(event) {
    if (event.mapObject.id == "Kotli") {
        map.dataProvider.mapURL = "ammap/svg/kotli.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    } else if (event.mapObject.id == "Bimbher") {
        map.dataProvider.mapURL = "ammap/svg/bimbher.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    } else if (event.mapObject.id == "poonch") {
        map.dataProvider.mapURL = "ammap/svg/poonchajk.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    } else if (event.mapObject.id == "Bagh") {
        map.dataProvider.mapURL = "ammap/svg/bagh.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    } else if (event.mapObject.id == "muzaffarabad") {
        map.dataProvider.mapURL = "ammap/svg/muzaffarabad.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    } else if (event.mapObject.id == "srinagar") {
        map.dataProvider.mapURL = "ammap/svg/srinagar.svg";
        map.areasSettings.outlineThickness="3";
        map.write("mapdiv");
    }else if (event.mapObject.id == "mirpur") {
        map.dataProvider.mapURL = "ammap/svg/mirpur.svg";
        map.write("mapdiv");
    }
});

function goBack() {
    location.href="kashmir.html";
}
