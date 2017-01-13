* Firebase example using Javascript click game
* Library used: p5.js
* It basically saves the data (score) in firebase.
* Steps to get started:
  * Go to [Firebase](https://console.firebase.google.com)
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
  
  * Steps to write data to firebase:
    * Get a reference to the database service ```var db = firebase.database();```
    * Get reference to scores ```var ref = db.ref("scores");```
    * Pushing data to firebase ```ref.push(data);```
  
  * Steps to retrieve data from firebase:
    * Get reference to scores ```var ref = db.ref("scores");```
    * Call on method ```ref.on("value", data_retrieved, errData);```
  
  * Demo at: https://pratham87.github.io/Firebase/
  
  * Source: http://shiffman.net/a2z/firebase/
