console.log("  TASK 1:Italian fiscal code  ");
class Person {
	constructor(name, surname, gender, date) {
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.date = date;
	}
}
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
var a = new Person('Helen','Yu','F','1/12/1950');
console.log(a);

function remCons(input){              
    input=input.replace(/[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]/g, "");
    input=input.toUpperCase();
    return input;
}
function remVow( input ){
    input=input.replace(/[aeiouAEIOU]/g, "");
    input=input.toUpperCase();
    return input;
}


function threeSymbols(input){
        threeLetters="";
        if (input.length<3){
            threeLetters+=remVow(input)+remCons(input)+"X";
            return threeLetters;
        }
    if (remVow(input).length>=3){
    for (i=0; i<3;i++) {
        threeLetters +=remVow(input)[i];
      }
    return threeLetters;
    }
    if (remVow(input).length<3){
          threeLetters+=remVow(input);
          for(i=0; i<3; i++){
              if(threeLetters.length != 3){
                  threeLetters += remCons(input)[i];
              }else{
                threeLetters += "X";
              }
          }
          return threeLetters;
      }
}
function threeSymbolsName(input){
    threeLetters="";
    if (input.length<3){
        threeLetters+=remVow(input)+remCons(input)+"X";
        return threeLetters;
    }
    if (remVow(input).length<3){
        threeLetters+=remVow(input);
        for(i=0; i<3; i++){
            if(threeLetters.length != 3){
                threeLetters += remCons(input)[i];
            }else{
              break;
            }
        }
        return threeLetters;
    }
    if (remVow(input).length==3){ 
        for (i=0; i<3;i++) {
            threeLetters +=remVow(input)[i];
          }
        return threeLetters;
        }
if (remVow(input).length>3){ 
    threeLetters +=remVow(input)[0]+remVow(input)[2]+remVow(input)[3];
return threeLetters;
}
}
function genderdate(gen,dat){
    var data="";
    var res="";
    for (i=0;i<2;i++){
        data=dat.split('/');
    }
    day=data[0];
    month=data[1];
    year=data[2];
    res=year.substr(-2);
    res+=months[month];
   if (gen=="M"){
      if (day<10){
      res+="0"+day;
       }else{
    res+=day;
}
   }else{
       var newday=+day;
       newday+=40;
       res+=newday;
   }
   return(res);
}
console.log(threeSymbols(a.surname)+threeSymbolsName(a.name)+genderdate(a.gender,a.date));