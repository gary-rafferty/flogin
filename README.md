# flogin.js

## Stupidly simple facebook login as a jQuery plugin

### Usage

1. Load jQuery using a <script> tag and pointing the src to the jQuery library.
2. Load the flogin plugin in the same way.
3. Invoke it on the element that should trigger Facebook authentication.

NB: The plugin will also load the Facebook JS SDK so you do not need to do this.

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
