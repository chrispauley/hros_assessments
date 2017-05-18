---
title: /catalog/:id/packages
position: 2.0
type: get
description: List all Assessment Packages in a Catalog
right_code: |
  ~~~ json
  {
    "documentId": "1",
    "language": "en-US",
    "supplier": {
      "id": {"value": "001", "schemeId": "ap_Id"},
      "name": "Assessment Provider, Inc."
    },
    "packages": [{
        "packageId": "0001",
        "name": "Executive Management Assessment Test One",
        "descriptions": [
            "Description for the executive management test one."
        ]
      }
    ]
  }
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
: Limit the number of books returned

This call will return a maximum of 100 books
{: .info }

Lists all the photos you have access to. You can paginate by using the parameters listed above.

~~~ javascript
$.get("http://api.myapp.com/packages/", { "token": "YOUR_APP_KEY"}, function(data) {
  alert(data);
});
~~~
{: title="jQuery" }

~~~ python
r = requests.get("http://api.myapp.com/packages/", token="YOUR_APP_KEY")
print r.text
~~~
{: title="Python" }

~~~ javascript
var request = require("request");
request("http://api.myapp.com/books?token=YOUR_APP_KEY", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
~~~
{: title="Node.js" }

~~~ bash
curl http://sampleapi.readme.com/orders?key=YOUR_APP_KEY
~~~
{: title="Curl" }
