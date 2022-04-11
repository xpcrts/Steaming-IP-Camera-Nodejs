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
![Donate me bitcoin](https://lh3.googleusercontent.com/pDOWT8vk111T-qs_s2lKcvV8ocXtSEP29xXk7iw_4Ri2N7tb6mjmJix-B3rIAFS1UvAZmqDHJ6cT2ZgjzLBSiWzuvKDvea_mktQAvTXU5CCMHOMwv2ghHfew_-i3g3dQRfC-TBRLqm8ipCRBPpWxCNkuCAVPVEjR26R43JzGWefbe8pq5DpuhTar4LtP8OV7nt0_1JlA4tSIFUweKzaKz9TCd2P4gQx58PW6wdRDF8Ejqdbz0j3QGc5jas0-P67Q1AvkGB9nJlMH1YsUIS-ec7DnM4D_Xp159Vtx0JGmBvqylZvkRSty7PhBa_YPMv0Mhj3LQ4z3MkE_8Y9MoLoFH7wV_7YrNRGyAyMPVC0W6Qh2hiahAI4cW49WZ2b95lvfTyKrUxjEC3KFU8WLy52m2R-lBaYMX4-Rsqwv34RuFBg2ftxwXeyGUD2QovVVETUK3--sLlxFRpACpdnUtffWWDO9ntFxcYajfHTTHWnZAg2Vm2yZRsskYkpXdGt2SdTHzPxTHUrJcjWPM-gKK57lwr_a9HZCEA5LgMZ6Zgbo9IfVcLEvHmlp24yCpfTfgg8KzAPya1QYFdcR0e3OrR4Oijg7UaqKMdg3q8eDzlUrdX7Kax2s_5wmDMXvWn6wLZspN0MNmPWJp6c4EHnllGAxHAib0vk2DRPAlC1LqnQw7KP83X4ZuG4vEkMTrSWxufCTopQiFkL9KTVMuvemRlTb3cAnTWgZsPojQb1HGyVlAJHuuweYD8Rq0TXALpqr7l5MSfAH2yNq3Hoy_Zr1Ez1HKf0wQBRSUK0GpOVaiJuOwXlYKybCsPIPz9dJD4U6qLIys96gv-dO-bpw5t8r8G418rEZ5zQxaBsP0NFAQZqVFs2pAtHnAINWcj84IFFGt3VItDhBmg1WcY_oueAH=w1125-h1843-no?authuser=3)
![Donate me ethereum or usdt or usdc](https://lh3.googleusercontent.com/N0rRWHXEPDhu0f2UfB2H08P1T8QkBeydT9Hr3CmhBv469mkKQsa9S5MnOMMxwZzHoewWopxtfAOjZ700hh3Vnh6KmM2HQCep1vP-8eCvFDiGa27NC0HNgDqQiNQX1x1dp9vNYZGYm8UWauFdvKokCNJRZQuafABHnYIKaqo0YD2BcCOeuKpn1dEi5CUaUHPpTW8EF28qhxu9oK4H0TUNYDAbsY0MvAxt3wiQJSjTTqKnBjyWsBpNSMJjqY5I0mr_cvkCnk53nR1tr8xmD6CaDOrf0ytEgX811Xkpw1SMk3KqOpU1YLElTxahqKVlq8b4LwX1KtKnSpRcrSKdCPQ6lsHJMlm-5DxDVRsxYu1z4_91P8c4lDssK-K3jBJXszrhqwxngqZcExSiyvU3gvjIBdnvy7n0ZglRqRfFkc8QkSYsI2inNpk_oxN_AZTxBiUcnRrNCTJlUzsiyLYYLp-jFRjLu4xDHath2oHfyiethGAAvcQ2-SFIwcPq3zp7lU8ReIOAh0OHQh6xNwTg_vMh3TWEzj0uAFR9mmxBpd0fq7nIRGanH_Naf0DO99ItJPF6Jf92eKONz9ojDOndVSIpH0xYIrVlmz2wETXg0bA9JasaofuGnBk4ZhiFmUp6OvZXPoAnYzQmDaLvDla9FCApAkTA5HPBJNdgXDWpPJKaYehHFV1HwoFh2pDBNz1VnFT8EjhuIs2GQNnmUZ555hCo9gCCnJ-XG3alsAfLyhvZeR2qjEB0wT7gOaUKuOWcAVHmu4fxoHeMx0CHPnty5LLNoP5NhWT3OXjF-bURbe2qmrf7jFLZNHnhEZXSNFO51m3ORhHinSHN7g1Vxad1Xz7ddtXuDzk9MLvAsTTrQFX-um3QUlBvgnygguK77btrYhLqmFa3_hlt5cY4tkvn=w1125-h1887-no?authuser=3)


