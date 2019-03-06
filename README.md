# ANPrix

ANPrix is a software designed to work with "The Judge" wood derby hardware, it's writted in Javascript and Electron

Serial Port Setup, This has to be done on each OS  
npm install --save serialport  
npm install --save-dev electron-rebuild  
./node_modules/.bin/electron-rebuild  

The Judge Protocol Information  
Sending Commands:  
Sending a '*' Resets the Track

Recieving Commands:  
error gate is not up -- When the gate is down this error occurs
Lane 1    Time status  
Lane 2    Time status  
Lane 3    Time status  
Lane 4    Time status  

I.E.
Lane 1    1.234 win  
Lane 2    1.235 place    
Lane 3    1.236 show    
Lane 4    1.237  

(FYI I love the horse racing nod)  

GO -- Race is on, timers are started  
Race Over -- All Four Lanes have completed  
