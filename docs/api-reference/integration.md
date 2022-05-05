---
sidebar_position: 1
---

# Integration

To enable the KONSPOT meet in your application you must use JavaScript library script and integrate it into your application:

```js
<script src="https://connect.konspot.com/external_api.js"></script>
```

## Creating the Konspot Meet API object

After you have integrated the KONSPOT meet API library, you must then create the Konspot API object.


```js
const domain = 'demo.konspot.com';
const options = {
    roomName: 'KonspotVideoMeet',
    width: 700,
    height: 700,
    parentNode:document.querySelector('#meet')
    userInfo: {
        email: 'email@example.com',
        displayName: 'Lorem Ipsum'
    }
};
api = new KonspotVideoApi(domain, options)
```

**Optional arguments include:**

- roomName: The name of the room to join.
- width: The created IFrame width.
- height: The created IFrame height.
- parentNode: The HTML DOM Element where the IFrame is added as a child.