/*Simple database
- Store data in object, these called "table"s right now.
- Get: write a function which gets a key and the name of the table and returns the value.
- Put: write a function which gets a key, value and the name of the table and puts it into the table as key:value.
- DeleteByKey: write a function which gets a key and the name of the table and delete the value belongs to the key from the table.
- DeleteByValue: write a function which gets a value and the name of the table and delete it from the table.
- Create table: write a function which gets the name of the table and create it (add it to the list of tables).
For the solution you have to use the object supported by the Javascript, more info:
https://www.xul.fr/javascript/associative.php
Helps:
1.
The whole datastore should look like:
var database = new Object();
2.
Create table:
function createTable(tableName) {
    database[tableName] = new Object(); // or something similar
}
3.
Put:
function put(tableName, key, value) {
    table[key] = value
}
4.
Do it yourself.
*/

var mysql = require(mysql);
var con = mysql.createConnection({
    host: "localhost",
    user: "fraadam",
    password: "3TRIatlON",
    database: "mydb"
  });