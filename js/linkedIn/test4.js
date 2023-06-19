// Which code would you use to access the Irish flag?

var flagsJSON = '{ "countries" : [' +
'{ "country":"Ireland" , "flag":"I"},' +
'{ "country":"Servia" , "flag":"S"},' +
'{ "country":"Peru" , "flag":"P"} ]}';

var flagDatabase = JSON.parse(flagsJSON);

const IrelandFlag = flagDatabase.countries[0].flag;
console.log(IrelandFlag);