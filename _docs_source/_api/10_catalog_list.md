---
title: /catalogs
position: 1.0
type: get
description: Get Assessment Provider Catalog Meta Data
right_code: |
  ~~~ json
  [
    {
      "documentId": "1",
      "language": "en-US"
    },
    {
      "documentId": "2",
      "language": "es-MX"
    }    
  ]
  ~~~
  {: title="Response" }

  ~~~ json
  {
    "error": true,
    "message": "Invalid offset"
  }
  ~~~
  {: title="Error" }
---
offset
: Offset the results by this amount

limit
: Limit the number of catalogs returned

This call will return a maximum of 100 books
{: .info }

Lists all the catalogs you have access to. You can paginate by using the parameters listed above.

~~~ javascript
$.get("http://api.myapp.com/catalogs/", { "token": "YOUR_APP_KEY"}, function(data) {
  alert(data);
});
~~~
{: title="jQuery" }

~~~ python
r = requests.get("http://api.myapp.com/catalogs/", token="YOUR_APP_KEY")
print r.text
~~~
{: title="Python" }

~~~ javascript
var request = require("request");
request("http://api.myapp.com/catalogs?token=YOUR_APP_KEY", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
~~~
{: title="Node.js" }

~~~ bash
curl http://api.myapp.com/catalogs?key=YOUR_APP_KEY
~~~
{: title="Curl" }
