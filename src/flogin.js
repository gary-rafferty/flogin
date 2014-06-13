/*
 * flogin.js
 * stupidly simple facebook login as a jQuery plugin
 *
 * Gary Rafferty - 2013
 */
(function($) {
  $.fn.facebook_login = function(options) {
    var defaults = {
      endpoint: '/sessions/new',
      permissions: 'email',
      onSuccess: function(data) { console.log([200,'OK']); },
      onError: function(data) { console.log([500,'Error']); }
    };

    var settings = $.extend({}, defaults, options);

    if(settings.appId === 'undefined') {
      console.log('You must set the appId');
      return false;
    }

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/all.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      FB.init({
        appId: settings.appId,
        status: true,
        xfbml: true
      });
    };

    this.bind('click', function() {
      FB.login(function(r) {
        var response;
        if(response = r.authResponse) {
          var user_id = response.userID;
          var token   = response.accessToken;

          FB.api('/me?access_token='+token, function(user) {
            $.ajax({
              url: settings.endpoint,
              data: {user_id: user_id,token: token,email: user.email},
              type: 'POST',
              async: false,
            }).done(settings.onSuccess());
          });
        } else {
          settings.onError();
        }
      }, {scope: settings.permissions});

      return false; 
    });
  }
})(jQuery);

