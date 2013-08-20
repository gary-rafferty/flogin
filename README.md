# flogin.js

## Stupidly simply facebook login as a jQuery plugin

### Usage

Src the plugin, and then invoke it on the element that should trigger Facebook authentication.

```html
<!DOCTYPE html>
<html>
  <head>
  	<script type='text/javascript' src='jquery.js'></script>
  	<script type='text/javascript' src='flogin.js'></script>
  	<script type='text/javascript'>
  	  $(function() {
  	    $('#login').facebook_login({
  	      appId: 'YOUR-FACEBOOK-APP-ID',  # your facebook application id
  	      endpoint: '/sessions/new',      # where to POST the response to
  	      onSuccess: function(data) {},   # what to do on success, usually redirect
  	      onError: function(data) {}      # what to do on error
  	      permissions: 'read_stream'      # what permissions you need, default is just email
  	    });
  	  });
  	</script>
  </head>
  <body>
    <a href='#' id='login'>Login with Facebook</a>
  </body>
</html>
```

### Options

| Option        | Required      | Type    |  Default
| ------------- |:-------------:|:-------:| :------:
| appId         | YES           | String  | ''
| endpoint      | NO            | String  | /sessions/new
| onSuccess     | NO            | Callback| console.log([200,'OK'])
| onError       | NO            | Callback| console.log([500,'Error'])
| permissions   | NO            | String  | 'email'


