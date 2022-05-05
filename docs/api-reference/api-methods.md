---
sidebar_position: 2
---

# API's Methods & Functions

Lets discuss and go through Konspot API functions and methods to control your embedded Konspot Meet Conference.

## Functions

**getAvailableDevices**

Retrieves a list of available devices.

```js
api.getAvailableDevices().then(devices => {
    // devices = {
    //     audioInput: [{
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'audioinput'
    //         label: 'label'
    //     },....],
    //     audioOutput: [{
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'audioOutput'
    //         label: 'label'
    //     },....],
    //     videoInput: [{
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'videoInput'
    //         label: 'label'
    //     },....]
    // }
    ...
});
```

**getCurrentDevices**

Retrieves a list of currently selected devices.

```js
api.getCurrentDevices().then(devices => {
    // devices = {
    //     audioInput: {
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'videoInput'
    //         label: 'label'
    //     },
    //     audioOutput: {
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'videoInput'
    //         label: 'label'
    //     },
    //     videoInput: {
    //         deviceId: 'ID'
    //         groupId: 'grpID'
    //         kind: 'videoInput'
    //         label: 'label'
    //     }
    // }
    ...
});
```
**getParticipantsInfo**

Returns an array containing participant information such as ID, display name, avatar URL, and email.

```js
api.getParticipantsInfo();
```

**getVideoQuality**

Returns the current video quality setting.

```js
api.getVideoQuality();
```

**isDeviceChangeAvailable**

Resolves to true if the device change is available and to false if not.

```js
// The accepted deviceType values are - 'output', 'input' or undefined.
api.isDeviceChangeAvailable(deviceType).then(isDeviceChangeAvailable => {
    ...
});
```

**isDeviceListAvailable**

Resolves to true if the device list is available and to false if not.

```js
api.isDeviceListAvailable().then(isDeviceListAvailable => {
    ...
});
```

**pinParticipant**

Selects the participant ID to be the pinned participant in order to always receive video for this participant.

```js
api.pinParticipant(participantId);
```

**setAudioInputDevice**

Sets the audio input device to the one with the passed label or ID.

```js
api.setAudioInputDevice(deviceLabel, deviceId);
```

**setAudioOutputDevice**

Sets the audio output device to the one with the passed label or ID.

```js
api.setAudioOutputDevice(deviceLabel, deviceId);
```

**setLargeVideoParticipant**

Displays the participant with the given participant ID on the large video.If no participant ID is given, a participant is picked based on the dominant, pinned speaker settings.

```js
api.setLargeVideoParticipant(participantId);
```

**setVideoInputDevice**

Sets the video input device to the one with the passed label or ID.

```js
api.setVideoInputDevice(deviceLabel, deviceId);
```

**getNumberOfParticipants**

Returns the number of conference participants:

```js
api.getNumberOfParticipants();
```

**getAvatarURL**

Returns a participant's avatar URL:

```js
api.getAvatarURL(participantId);
```

**getDisplayName**

Returns a participant's display name:

```js
api.getDisplayName(participantId);
```

**getEmail**

Returns a participant's email:

```js
api.getEmail(participantId);
```

**isAudioMuted**

Returns a Promise which resolves to the current audio muted state:

```js
api.isAudioMuted().then(muted => {
    ...
});
```

**isVideoMuted**

Returns a Promise which resolves to the current video muted state:

```js
api.isVideoMuted().then(muted => {
    ...
});
```

**isAudioAvailable**

Returns a Promise which resolves to the current audio availability state:

```js
api.isAudioAvailable().then(available => {
    ...
});
```

**isVideoAvailable**
Returns a Promise which resolves to the current video availability state:

```js
api.isVideoAvailable().then(available => {
    ...
});
```

## Commands

You can control the embedded Konspot Meet conference by calling executeCommand on the KonspotVideoApi object:

**displayName**

Sets the display name of the local participant.

```js
api.executeCommand('displayName', 'New Nickname');
```

**email**

Changes the local email address.

```js
api.executeCommand('email', 'example@example.com');
```

**avatarUrl**

Changes the local avatar URL.

```js
api.executeCommand('avatarUrl', 'https://example.com/u/3671647');
```

**toggleAudio**

Mutes / unmutes the audio for the local participant.

```js
api.executeCommand('toggleAudio');
```

**toggleVideo**

Mutes / unmutes the video for the local participant.

```js
api.executeCommand('toggleVideo');
```

**toggleShareScreen**

Start or stop screen sharing.

```js
api.executeCommand('toggleShareScreen');
```

**toggleTileView**

Enter or exit the tile view layout mode.

```js
api.executeCommand('toggleTileView');
```

**setVideoQuality**

Sets the send and receive video resolution.

```js
api.executeCommand('setVideoQuality',720);
```

**setTileView**

Enables or disables the tileview mode.

```js
api.executeCommand('setTileView',
    ```

**enabled: boolean**

);
toggleCamera
Toggles the front/back camera on mobile web.

```js
api.executeCommand('toggleCamera');
```

## Events

The KonspotVideoApi object implements the EventEmitter API for emitting and listening for events.

You can add event listeners to the embedded Konspot Meet using the addListener method:

```js
api.addListener(event, listener);
```

**If you want to remove a listener you can use the removeListener method:**


```js
api.removeListener(event, listener);
```

**participantJoined**

Provides event notifications about new participants who join the room.

```js
{
    id: string, // the id of the participant
    displayName: string // the display name of the participant
}
```

**participantLeft**

Provides event notifications about participants that leave the meeting room.

```js
{
    id: string // the id of the participant
}
```