---
title: /catalog/:id
position: 1.1
type: get
description: Get Catalog
right_code: |
  ~~~ json
  {
    {
      "documentId": "1",
      "language": "en-US",
      "party": {
        "supplier": {
            "id": { "value": "5000234" },
            "name": "Executive Assessments, Inc.",
            "personContacts": [
                {
                    "communication": {
                        "email": [
                            {
                                "address": "william.peterson@exectesters.com",
                                "name": "work"
                            }
                        ],
                        "phone": [
                            {
                                "formattedNumber": "888-555-9876",
                                "name": "work"
                            }
                        ],
                        "web": [ { "url": "www.exectesters.com" } ]
                    },
                    "name": {
                        "preferred": "Bill Peterson",
                        "given": "William",
                        "family": "Peterson"
                    },
                    "roleCode": "ATS Account Representative"
                }
            ]
        }
      }
    }
  }
  ~~~
  {: title="Response" }

  ~~~ json
  {
    "error": true,
    "message": "Catalog doesn't exist"
  }
  ~~~
  {: title="Error" }
---

Returns a specific book from your collection

~~~ javascript
$.get("http://api.myapp.com/catalog/1", {
  token: "YOUR_APP_KEY",
}, function(data) {
  alert(data);
});
~~~
{: title="jQuery" }

~~~ python
r = requests.get("http://api.myapp.com/catalog/1", token="YOUR_APP_KEY")
print r.text
~~~
{: title="Python" }

~~~ javascript
var request = require("request");
request("http://api.myapp.com/catalog/1?token=YOUR_APP_KEY", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
~~~
{: title="Node.js" }

~~~ bash
curl http://api.myapp.com/catalog/1?key=YOUR_APP_KEY
~~~
{: title="Curl" }
