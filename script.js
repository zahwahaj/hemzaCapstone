navigator.mediaDevices.getUserMedia({ audio: false, video: { width: window.innerWidth, height: window.innerHeight } },
    function(stream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function(e) {
      video.play();
    };
  },
  function(err) {
    console.log("The following error occured: " + err.name);
  }
);


 window.onload = function(){
    var images = new Array('Interactive Webpage/WebPage_(OPENER).png','Interactive Webpage//Webp.net-gifmaker.gif','Interactive Webpage/WebPage_02.png','Interactive Webpage/WebPage_03.png','Interactive Webpage/WebPage_04.png','Interactive Webpage/WebPage_05.png','Interactive Webpage/WebPage_06.png','Interactive Webpage/WebPage_07.png','Interactive Webpage/WebPage_08.png','Interactive Webpage/WebPage_09.png','Interactive Webpage/WebPage_10.png','Interactive Webpage/WebPage_11.png');
		var static_image = document.getElementById('static_image');
		var image_number = 0;
			setInterval(
					function(){
					 static_image.src = images[image_number];
					 image_number++;
					 if(image_number > images.length-1){
					 	image_number = 0;
					 }
                                    }
                                    ,Math.random() * (5500 -2000) + 2000);
			
		}
		
		
		
		
		
		
