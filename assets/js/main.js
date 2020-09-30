document.addEventListener("DOMContentLoaded",function(){new SweetScroll({});
particlesJS("particles-js",{particles:{number:{value:115,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:1,distance:80,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
      }
    );
    wow.init();

    jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
//INICIAMOS EL PROGRESS
jQuery('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 6000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
//INICIAMOS EL fluid

var fm1 = new FluidMeter();
fm1.init({
  targetContainer: document.getElementById("fluid-meter-creativity"),
  fillPercentage: 80,
  options: {
    fontSize: "25px",
    fontFamily: "Oxygen",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 150,
    borderWidth: 4,
    backgroundColor: "#323842",
    foregroundColor: "#232e3c",
    foregroundFluidLayer: {
      fillStyle: "#55DD10",
      angularSpeed: 90,
      maxAmplitude: 11,
      frequency: 25,
      horizontalSpeed: -200
    },
    backgroundFluidLayer: {
      fillStyle: "#CDDD10",
      angularSpeed: 100,
      maxAmplitude: 13,
      frequency: 23,
      horizontalSpeed: 230
    }
  }
});

var fm2 = new FluidMeter();
fm2.init({
  targetContainer: document.getElementById("fluid-meter-responsability"),
  fillPercentage: 90,
  options: {
    fontSize: "25px",
    fontFamily: "Oxygen",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 150,
    borderWidth: 4,
    backgroundColor: "#323842",
    foregroundColor: "#232e3c",
    foregroundFluidLayer: {
      fillStyle: "#55DD10",
      angularSpeed: 90,
      maxAmplitude: 11,
      frequency: 25,
      horizontalSpeed: -200
    },
    backgroundFluidLayer: {
      fillStyle: "#CDDD10",
      angularSpeed: 100,
      maxAmplitude: 13,
      frequency: 23,
      horizontalSpeed: 230
    }
  }
});

var fm3 = new FluidMeter();
fm3.init({
  targetContainer: document.getElementById("fluid-meter-3"),
  fillPercentage: 80,
  options: {
    fontSize: "25px",
    fontFamily: "Oxygen",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 150,
    borderWidth: 4,
    backgroundColor: "#323842",
    foregroundColor: "#232e3c",
    foregroundFluidLayer: {
      fillStyle: "#55DD10",
      angularSpeed: 90,
      maxAmplitude: 11,
      frequency: 25,
      horizontalSpeed: -200
    },
    backgroundFluidLayer: {
      fillStyle: "#CDDD10",
      angularSpeed: 100,
      maxAmplitude: 13,
      frequency: 23,
      horizontalSpeed: 230
    }
  }
});

var fm4 = new FluidMeter();
fm4.init({
  targetContainer: document.getElementById("fluid-meter-4"),
  fillPercentage: 75,
  options: {
    fontSize: "25px",
    fontFamily: "Oxygen",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 150,
    borderWidth: 4,
    backgroundColor: "#323842",
    foregroundColor: "#232e3c",
    foregroundFluidLayer: {
      fillStyle: "#55DD10",
      angularSpeed: 90,
      maxAmplitude: 11,
      frequency: 25,
      horizontalSpeed: -200
    },
    backgroundFluidLayer: {
      fillStyle: "#CDDD10",
      angularSpeed: 100,
      maxAmplitude: 13,
      frequency: 23,
      horizontalSpeed: 230
    }
  }
});

var btn = $('#buttonTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
