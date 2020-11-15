var age = 16;
var isMember = true;
var result = null;
if  ( age <= 15 ) {result = '800円';} 
else if (age >= 16 && isMember) {result = '1000円';}
else { result = '1800円'}
document.write(result);