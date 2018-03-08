const fs = require('fs');
//Read data from the json file
fs.readFile('po_step1.json', 'utf8', function(err, data) {
  var jsonData = JSON.parse(data); //Parse data to a declared variable
  tableData = jsonData.fs_P43081_W43081A.data.gridData.rowset;

  let objMap = {};
//Loop through table data i.e rowset
     tableData.forEach(element => {
       //Loop in the nested object of each row.
       for (const key in element) {
         //Validate the key if its not undefined
         if (element[key].value !== undefined ) {
           //Map key values to an empty object
           objMap[element[key].title] = element[key].value;
         }
       }
       console.log(objMap);
          });
})
