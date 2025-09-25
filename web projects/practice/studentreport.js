const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//using for loop

for (let i = 0 ;i < studentReport.length; i++ )
{
    if (studentReport.length < 30) 
    {
        console.log(studentReport[i]);
    }
    
}

//using while loop 


let i = 0; 

while ( i < studentReport.length)
{
    if (studentReport[i] < 30){

        console.log (studentReport[i])

    }
   i++; 
}

//using for each 

studentReport.forEach((score) => {
    if(score < 30) {
        console.log (score);
    }
});


 // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }