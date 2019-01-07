# Steaming IP Camera Nodejs

Open source project of real time streaming IP/Network security camera on web application using NodeJS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
* [Git](https://git-scm.com/downloads) - free and open source distributed version control system 


* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
* [node-onvif](https://www.npmjs.com/package/node-onvif) - Node.js module allows to communicate with the network camera
```
npm i node-onvif -s
```
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play

* [node-onvif](https://www.npmjs.com/package/node-onvif) - Node.js module allows to communicate with the network camera

### Installing
A step by step series of examples that tell you how to get a development env running
1. Download Git
* [Git](https://git-scm.com/downloads)
2. Open <strong>command prompt/terminal</strong>, Clone this repository to your local machine
```
git clone https://github.com/xpcrts/Steaming-IP-Camera-Nodejs
```
3. Download and install Node.js on your local machine
* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
4. Download and install pre-build FFMPEG Build on your local machine (Download Build)
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play<br />
* Copy the FFMPEG Zip folder you have just downloaded, paste it into C: drive for simplicity and unzip it.
* Rename the file to <strong>ffmpeg</strong> for simpicity
* After unzipped the file, navigate ffmpeg/bin <br/>
#### On Microsoft Windows
You need to add ffmpeg to <strong>system variables</strong> (For all users) or <strong>User variables</strong> (For specific user)<br />
For research and test, I recommend to add the ffmpeg path to the <strong>system variables</strong> to do that just navigate to:
a. Control Panel
b. System and Security
c. System 
d. Advanced system settings
e. Environment Variables...
f. System variables
g. Path (Double-click on it)
h. New
i. Paste this
```C:\ffmpeg\bin```
j. OK (3 times)<br />
5. NPM install node-onvif
```
npm install node-onvif -s
```
6.NPM install node-rtsp-stream
```
npm i node-rtsp-stream
```


... bin
... doc

``` 
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/blob/master/LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration: Thank you to Celalettin Erbulut
* etc
