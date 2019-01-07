
    //Camera Authentication
    var ip_address = "10.0.17.11"
    //camera username and password
    var username = "admin";
    var password="admin";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address +':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
        wsPort: 9999    
    });
