// Complpeted with help from Sheryl and Michael in Tutor Support as well as as snippets
function LoadMap() {
    const cemetery = {
      lat: 50.05484,
      lng: 3.52440
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: {
        lat: 50.05484,
        lng: 3.52440
      },
    });
  
    var markers = [{
        "title": 'Private Richard Spearink',
        "lat": '50.054870024722895',
        "lng": '3.5244262134913344',
        "description": 'Private Richard Spearink <br> St Souplet British Cemetery'
      },
      {
        "title": 'Private Frederick Spearink',
        "lat": '51.402170802739015',
        "lng": '-0.16887147356538348',
        "description": 'Private Frederick Spearink <br> Mitcham War Memorial'
      },
      {
        "title": 'Private Frederick Spearink',
        "lat": '40.046120999996475',
        "lng": '26.17819112174944',
        "description": 'Private Frederick Spearink <br> Helles Memorial'
      },
      {
        "title": 'Lance Sergeant Thomas Banister',
        "lat": '50.63119698236488',
        "lng": '2.8360939264008294',
        "description": 'Lance Sergeant Thomas Banister <br> Rue-Petillon Military Cemetery'
      },
      {
        "title": 'Second Lieutenant Sidney Vandyke Hasluck',
        "lat": '40.046079676342764',
        "lng": '26.179177425981795',
        "description": 'Second Lieutenant Sidney Vandyke Hasluck <br> Helles Memorial'
      },
      {
        "title": 'Nurse Elizabeth McMath (Daisy) Warnock',
        "lat": '49.4093872940864',
        "lng": '1.0655323414781486',
        "description": 'Nurse Elizabeth McMath (Daisy) Warnock <br> St. Sever Cemetery'
      },
      {
        "title": 'Private Thomas Phillips',
        "lat": '53.127595371367754',
        "lng": '-1.295838617665544',
        "description": 'Private Thomas Phillips <br> Huthwaite Cenotaph'
      },
      {
        "title": 'Private Thomas Phillips',
        "lat": '50.851866340749275',
        "lng": '2.8908868271336203',
        "description": 'Private Thomas Phillips <br> Menin Gate Memorial'
      },
      {
        "title": 'Leading Seaman John Sexton',
        "lat": '50.36582785459549',
        "lng": '-4.142284760117049',
        "description": 'Leading Seaman John Sexton <br> Plymouth Naval Memorial'
      },
      {
        "title": 'Lance Corporal Arthur Norman (Barney) Allen',
        "lat": '50.85220907213556',
        "lng": '2.8912626644448967',
        "description": 'Lance Corporal Arthur Norman (Barney) Allen <br> Menin Gate Memorial'
      },
      {
        "title": 'Major and acting Lieutenant-Colonel Harry Moorhouse',
        "lat": '50.88730239126956',
        "lng": '2.998478924563846',
        "description": 'Major and acting Lieutenant-Colonel Harry Moorhouse <br> Tyne Cot Memorial'
      },
      {
        "title": 'Captain Ronald Moorhouse',
        "lat": '50.887139952689154',
        "lng": '2.9985754842845584',
        "description": 'Captain Ronald Moorhouse <br> Tyne Cot Memorial'
      },
      {
        "title": 'Private John “Jack” Henry Thomas',
        "lat": '50.37981021533251',
        "lng": '2.7739841263899008',
        "description": 'Private John “Jack” Henry Thomas <br> Canadian National Vimy Memorial'
      },
      {
        "title": 'Private John “Jack” Henry Thomas',
        "lat": '50.45154804442785',
        "lng": '2.798063726393039',
        "description": 'Private John “Jack” Henry Thomas <br> Loos British Cemetery'
      },
      {
        "title": 'Private Bertram Alec Reader',
        "lat": '50.05252071122409',
        "lng": '2.687815630628548',
        "description": 'Private Bertram Alec Reader <br> Thiepval Memorial Pier'
      },
      {
        "title": 'Trooper George Ernest Dawkes',
        "lat": '45.813590761971845',
        "lng": '12.3477515531867',
        "description": 'Trooper George Ernest Dawkes <br> Tezze British Cemetery'
      },
      {
        "title": 'Private Adolphus Jack',
        "lat": '50.933846037599',
        "lng": '-1.4310416429023036',
        "description": 'Private Adolphus Jack <br> Hollybrook Memorial'
      },
      {
        "title": 'Lance Corporal Norman Frank Ewart Cole',
        "lat": '50.05309632492973',
        "lng": '2.687876256950335',
        "description": 'Lance Corporal Norman Frank Ewart Cole <br> Thiepval Memorial Pier'
      },
      {
        "title": 'Rifleman Henry William Longman',
        "lat": '50.88658494994486',
        "lng": '2.998103415514772',
        "description": 'Rifleman Henry William Longman <br> Tyne Cot Memorial'
      },



      // WW2 HEROES
      {
        "title": 'First Officer Dora Lang',
        "lat": '51.52658038737305',
        "lng": '-0.7423668954214439',
        "description": 'First Officer Dora Lang <br> Maidenhead (All Saints) Cemetery'
      },
      // {
      //   "title": 'Nurse Edith Cavell',
      //   "lat": 'XXXXXXXXX',
      //   "lng": 'XXXXXXXXX',
      //   "description": 'Nurse Edith Cavell <br> XXXXXX'
      // },
      {
        "title": 'Wing Commander Guy Gibson VC',
        "lat": '51.57034852676304',
        "lng": '4.406121760568442',
        "description": 'Wing Commander Guy Gibson VC <br> Steenbergen-en-Kruisland, Roman Catholic Cemetery'
      },
      // {
      //   "title": 'Witold Urbanowicz',
      //   "lat": 'XXXXXXXXX',
      //   "lng": 'XXXXXXXXX',
      //   "description": 'Witold Urbanowicz <br> XXXXXX'
      // },

      // {
      //   "title": 'Bernard Jordan',
      //   "lat": 'XXXXXXXXX',
      //   "lng": 'XXXXXXXXX',
      //   "description": 'Bernard Jordan <br> XXXXXX'
      // },


      {
        "title": 'Captain Francis Brown Wai',
        "lat": '21.313313161958163',
        "lng": '-157.84265753382715',
        "description": 'Captain Francis Brown Wai <br> National Memorial Cemetery of the Pacific'
      },
      {
        "title": 'First Lieutenant John Glennon Kriegshauser',
        "lat": '53.369075091120855',
        "lng": '-1.5078312159039204',
        "description": 'First Lieutenant John Glennon Kriegshauser <br> Endcliffe Park'
      },
      {
        "title": 'S/Sgt Daniel E. McTaggart',
        "lat": '42.01595342706926',
        "lng": '-98.083060545335685',
        "description": 'S/Sgt Daniel E. McTaggart <br> West Cedar Valley Cemetery'
      },





      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },


      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },


      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },


      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },


      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },


      {
        "title": 'XXX',
        "lat": 'XXXXXXXXX',
        "lng": 'XXXXXXXXX',
        "description": 'XXX <br> XXXXXX'
      },
      



    ];
    window.onload = function () {
      LoadMap();
    }
  
    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();
  
    for (var i = 0; i < markers.length; i++) {
      var data = markers[i];
      var myLatlng = new google.maps.LatLng(data.lat, data.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: data.title
      });
  
      //Attach click event to the marker.
      (function (marker, data) {
        google.maps.event.addListener(marker, "click", function (e) {
          //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
          infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
          infoWindow.open(map, marker);
        });
      })(marker, data);
    }
  }