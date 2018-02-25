# PasaLoYa

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/VGamezz19/pasaLoYa/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://github.com/VGamezz19/pasaLoYa/releases)

### Issues React-Native

If you have this error --> react-native app doesn't work ":CFBundleIdentifier", Does Not Exist

I was able to solve this issue! Looks like port 8081 was in use:

````sh
lsof -n -i4TCP:8081
node    7601 CXI624   23u  IPv6 0xc6b249599e5f1169      0t0  TCP *:sunproxyadmin (LISTEN)
````

`kill - 9 7601`