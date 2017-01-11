* Firebase example using Javascript click game
* Library used: p5.js
* It basically saves the data (score) in firebase.
* Steps:
  * Go to https://console.firebase.google.com
  * Go to Console
  * Click on Add Firebase to your web app
  * Copy paste <script src="https://www.gstatic.com/firebasejs/3.6.5/firebase.js"></script> in index.html
  * Copy paste the config in function setup()
  * Security:
    * Go to Database 
    * Go to Rules and make write as false (if you want to deny writing permission to db).
    *  ```{
           "rules": {
             ".read": true,
             ".write": false
            }
           } ```
  * Source: http://shiffman.net/a2z/firebase/
