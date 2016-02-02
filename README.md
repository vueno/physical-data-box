# PHYSICAL DATA BOX

This project can bring you the feeling of touching virutal data like music, pictures, apps, documents.

First we wanted to build something like the Spotify Box from Jordi Alba (http://blog.zenona.com/) but as we thought about 
the the other virutal data on the computer that can be opened with RFID-Tags we choose to make something more universally.

Our project works with node.js, RC522(RFID Card R/W), serialport, open, exec.

1. install node - https://github.com/nodejs/node
2. install serial-port - https://github.com/voodootikigod/node-serialport
3. install the code on the arduino "RFID_Kartennummer.ino"
4. search the path to the arduino "/dev/tty.wchusbserial1420"
5. choose your own file/document paths on the app.js file
6. run the file app.js in the terminal


Arduino Code by http://funduino.de/index.php/3-programmieren/nr-19-rfid with this code we can shrink the RFID Card Number to get
a smaller number from the arduino -> terminal.


The next steps are:

- create a user interface for matching the data with the files, documents..

![img_2787](https://cloud.githubusercontent.com/assets/11961650/12735364/8cef73b8-c947-11e5-94d7-407df6e9fc68.jpg)

![img_2848](https://cloud.githubusercontent.com/assets/11961650/12735379/bb754974-c947-11e5-8d32-3aa84c29d9af.jpg)


Thanks to C. Coenen for helping to create this project.
