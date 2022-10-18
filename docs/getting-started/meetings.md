---
sidebar_position: 3
---

# Create Konspot Meetings

**Konspot Backend Apis to Create And Validate Rooms/Meetings**
 
**[Click for Postman Collection](https://connect.konspot.com/konspot_api.js)**

- Create Room/Meeting.
	- `https://develop.konspot.com/api/quickmeeting?api=Apikey&roomkey=RoomKey`
- Validate Room.
	- `https://develop.konspot.com/api/validateRoom?roomid=room_id&password=password&api=Apikey+'&roomkey=Roomkey`
- New Participant Joined
	- `https://develop.konspot.com/api/newParticipant?room_id=room_id&name=ParticipantName&konspot_id=ParticipantKonspotId&type=joined&api=ApiKey&roomkey=RoomKey`
- Participant Left Meeting
	- `https://develop.konspot.com/api/leftParticipant?room_id=room_id&name=ParticipantName&konspot_id=ParticipantKonspotId&type=Left&api=ApiKey&roomkey=RoomKey`
- Save Chat
	- `https://develop.konspot.com/api/saveChat?room_id=room_id&sendby=participantName&sendto=Everyone&user_id=user_id&chattype=Public&chatcontent=chatcontent&attachment=filePath&filetype=ext&filesize=fileSize&api=ApiKey&roomkey=RoomKey`

- **[Click for Postman Collection](https://connect.konspot.com/konspot_api.js)**
  