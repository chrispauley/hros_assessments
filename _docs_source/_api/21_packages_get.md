---
title: /packages/:id
position: 2.1
type: get
description: Get Package
right_code: |
  ~~~ json
  {
    "id": 3,
    "title": "The Book Thief",
    "score": 4.3,
    "dateAdded": "5/1/2015"
  }
  ~~~
  {: title="Response" }

  ~~~ json
  {
    "error": true,
    "message": "Book doesn't exist"
  }
  ~~~
  {: title="Error" }
---

Returns a specific book from your collection

~~~ javascript
$.get("http://api.myapp.com/catalog/a/package/1", {
  token: "YOUR_APP_KEY",
}, function(data) {
  alert(data);
});
~~~
{: title="jQuery" }
