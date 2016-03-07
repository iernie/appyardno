function initMap() {
  var point = {
    lat: 59.899519,
    lng: 10.6287
  };

  var customMapType = new google.maps.StyledMapType([{
    stylers: [{
      saturation: -100
    }]
  }]);
  var customMapTypeId = 'appyard';

  var map = new google.maps.Map(document.getElementById('Map'), {
    center: point,
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false
  });

  var marker = new google.maps.Marker({
    position: point,
    map: map
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}

function initParallax() {
  var max = 0;
  $($('section').get().reverse()).each(function() {
    var origin = $(this).offset().top + 72;
    $(this).data('origin', origin);
    $(this).css({
      position: 'absolute',
      top: origin
    });
    if (max < origin) {
      max = origin;
    }
  });

  $(window).scroll(function() {
    var yPos = $(window).scrollTop();
    var card = false;
    var origin = -1;
    var cardPadding = 0;

    $($('section').get().reverse()).each(function() {
      var that = $(this);
      origin = that.data('origin');
      that.css({
        position: 'absolute',
        top: origin
      });
      var padding = 0;
      if (that.height() > $(window).height()) {
        padding = that.height() - $(window).height();
      }
      if (card === false && yPos > origin + padding && yPos < max) {
        card = that;
        cardPadding = padding;
      }
    });

    if (card !== false) {
      if (yPos > origin && yPos < max) {
        card.css({
          position: 'fixed',
          top: origin - cardPadding
        });
      } else {
        $('section').first().css({
          position: 'fixed',
          top: 0
        });
      }
    }
  });
}

var md = new MobileDetect(window.navigator.userAgent);
$(window).on('load', function() {
  if (!(md.phone() || md.mobile() || md.tablet())) {
    initParallax();
  }
});

$(document).ready(function() {
  SmoothScroll();
  new WOW().init();
  smoothScroll.init({
    updateURL: false
  });
  $('html').flowtype({
    fontRatio: 50,
    minimum: 320,
    maximum: 991,
    minFont: 14,
    maxFont: 36
  });

  var owl = $('.Image-list');
  owl.owlCarousel({
      singleItem: true
  });
  $(".Images-list-nav-button--next").click(function(){
    owl.trigger('owl.next');
  })
  $(".Images-list-nav-button--prev").click(function(){
    owl.trigger('owl.prev');
  })

  if (window.location.hash === '#takk') {
    window.location.hash = "";
    noty({
      text: 'Flott!<br>Vi kommer til å kontakte deg så fort som mulig.',
      layout: 'appyard',
      theme: 'appyard',
      type: 'information',
      timeout: 5000,
      modal: true,
      animation: {
        open: 'animated bounceInDown',
        close: 'animated bounceOutUp',
      }
    });
  }
});
