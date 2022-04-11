# Steaming IP Camera Nodejs
### Donate me (if it helpful)
[![](https://img.shields.io/badge/%24-donate-green.svg)](https://github.com/QingWei-Li/donate)<br/>
Bitcoin (BTC): bc1qtmvj9670pxrrdhqg98zge6qkw3kr590r96kq5p <br/>
Ethereum (ETH) or USDT (ETH Network) or USDC (ETH Network): 0x16f2b8e63859f5665023D33d65DBcba189e4A9d4

Open source project of real time streaming (~30 fps) IP/Network security camera on web browser using NodeJS

![Content of web page analyzation by Google](https://lh3.googleusercontent.com/71kkGWwhwsM8tGXdrM1_wdpKlJS0Lqfta_f7pT0UBwaqRHdNgac_LkoEmMjBHsIpXBYaRThhNatL712anNZsEbTVJ1UEfiQMzJLdSvxquYOmH9ilDvQ_1J-XIR-4kjreB7ctyfIp_Z5oriIaAqTK8DvIFbadIHqyzaKjVBrCgQpnjeUZ_gDxBR5gw2H5l6TjNwvhG3dV1j3i_PZP5abj4lgDgJmNbB_Za9Gjejr4Ba1l4CEop4bqOkiGqS5OFjhp_XWCpngg5hhOZq7WLsLVd6w865-Cb1AFfuwoOiRTjUnoG9Nrpheuf-VxsOXaPuCgWvnwDi3BmgUujUXLvokfxcqQYY1SbAxxAXlyp5n22LyStthiolF9X2_1GTF1Lc_qNWJySv2BUAepMp_hQiyq1-ALMAfwrxCb4ONhVLBcypoZ9WfjbRHC-tRyr4rcLZ2KfPZyI4twAD11HVg2zvBWjJ5OccBPA3OFyxTwU9dA61WQvygJJFRugEm6fw194U87L46V5zgZ_R_Fb0ttjbFFLsDWRPJCU5VOdpjC27qTexpH6WHxgwx84qPbDc5v_TAopuWEHuj88zv3_8BXeU6NLr3miEkGz1_wjy6UXKOr9HJO8xUUHMuTuvYMmsR9QhSanx0jibE1l3PPpFmPZcIcQy2GbqncrT6j4jWNQeZAiyZlIpwv7oUmMMvxXrdY11MnnvlVFN4Ov3JxX3jf_bg=w1187-h667-no)

## Getting Started

These instructions will get you a copy of the project to make it up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [Git](https://git-scm.com/downloads) - free and open source distributed version control system 
* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play

### Installing

A step by step series of examples that tell you how to get a development up and running

1. Download Git
* [Git](https://git-scm.com/downloads)
2. Open <strong>command prompt/terminal</strong>, Clone this repository to your local machine
```
git clone https://github.com/xpcrts/Steaming-IP-Camera-Nodejs
```
3. Download and install Node.js on your local machine
* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
4. Download and install pre-build FFMPEG Builds on your local machine (Download Build)
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play<br />
* Copy the FFMPEG Zip folder you have just downloaded, paste it into C: drive for simplicity and unzip it.
* Rename the file to <strong>ffmpeg</strong> for simpicity
* After unzipped the file, navigate ffmpeg/bin <br/>
#### On Microsoft Windows
You need to add ffmpeg to <strong>system variables</strong> (For all users) or <strong>User variables</strong> (For specific user)<br />
For research and test, I recommend to add the ffmpeg path to the <strong>system variables</strong> to do that just navigate to:<br/>
a. Control Panel<br/>
b. System and Security<br/>
c. System <br/>
d. Advanced system settings<br/>
e. Environment Variables...<br/>
f. System variables<br/>
g. Path (Double-click on it)<br/>
h. New<br/>
i. Paste this
```C:\ffmpeg\bin```<br/>
j. OK (3 times)<br /><br/>
5. NPM install node-onvif
```
npm install node-onvif -s
```
6.NPM install node-rtsp-stream<br/>
```
npm i node-rtsp-stream -s
```
7.NPM install http-server<br/>
```
npm install http-server -g
```

## Running the tests

1. In the repository, open <i>app.js</i> file
* Change IP address to your camera IP address
* Username of your network camera
* Password of your network camera<br/>
2. Open one command prompt/terminal, navigate to <strong>Streaming-IP-Camera-Nodejs/src</strong> directory and type:
```
http-server
```
hit enter to run<br /><br/>
3. Open another command prompt/terminal, on the same directory path and type: 
```
npm start
```
hit enter to run<br /><br/>
Now keep those two terminal up and running<br/><br/>
<strong>Preview Streaming Camera on web browser by go to this URL:<br/></strong>
> [127.0.0.1:8000](http://127.0.0.1:8080/)<br/>

You are ready to go.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## To-dos

* Streaming Multiple camera channels at once, using 4x4 grid or more
* Customize width and height of canvas
* Improve streaming resolution quality
* Decrease streaming latency 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/tags). 

## Authors

* **Phok Chanrithisak** - [xpcrts](https://github.com/xpcrts)

See also the list of [contributors](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/blob/master/LICENSE) file for details

## Acknowledgments

* Credit to: Celalettin Erbulut


# Donate me (if it helpful)
[![](https://img.shields.io/badge/%24-donate-green.svg)](https://github.com/QingWei-Li/donate)<br/>
Bitcoin (BTC): bc1qtmvj9670pxrrdhqg98zge6qkw3kr590r96kq5p <br/>
Ethereum (ETH) or USDT (ETH Network) or USDC (ETH Network): 0x16f2b8e63859f5665023D33d65DBcba189e4A9d4
