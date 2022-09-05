// String
/*let name = 'koushik'
console.log(name);
console.log(typeof name);*/

// Number
/*let num = 0
console.log(num);
console.log(typeof num);

let weight = 65.0
console.log(typeof weight);*/

// Boolean
/*let b = false
console.log(typeof b);*/

// Undefined
/*let a
console.log(a);*/

// Null
/*let c = ''
console.log(typeof c);
c = null;
console.log(typeof c);
*/


// Object
// let browser = {
//     "name": "chrome",
//     "version": 80,
//     "vendor": "Google",
//     fun: () => {
//         console.log('I eat RAM');
//     }
// }
// console.log(typeof browser);
// console.log(browser);
// browser.fun();
// console.log(browser.name);

let patientdata ={
    message: "Retrived successful",
    success: true,
    content: {
      PatientData: [
        {
          patientName: "TEST, Daniel",
          searchString: "999999999",
          id: "PAT_2k8O8bi567",
          searchType: "SSN",
          status: "PENDING"
        },
        {
          patientName: "TEST, ACN",
          searchString: "9398",
          id: "PAT_JHWhmGk913",
          searchType: "Acct No (MRN)",
          status: "PENDING"
        },
        {
          patientName: "TEST, Christine",
          searchString: "9400",
          id: "PAT_nxnD8ty648",
          searchType: "Acct No (MRN)",
          status: "COMPLETED"
        }
      ]
    }
  }

//console.log(browsers[1].name);
//console.table(patientdata.content.PatientData[2])
//console.log(patientdata.content.PatientData[0])
/*for (const iterator in patientdata.content.PatientData) {
    console.log(patientdata.content.PatientData[iterator]);
}*/
let len = patientdata.content.PatientData.length;
console.log(len);
for(let i =0; i < len;++i){
    console.log(patientdata.content.PatientData[i]);   
}
// for (const iterator of fruits) {
//     console.log(iterator);
// }
