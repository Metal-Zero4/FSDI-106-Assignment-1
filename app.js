function init(){
    console.log("Hello World!");
    //get the button
    let btn=document.getElementById("btnSave");
    
    sayHello();

    //create an age variable
    let age=25
    //call a test2 function
    test2(age);

    let result= sum(21,21);
    console.log(result); //42

    // create an array
    let names=[];
    names.push('Gary');
    names.push('Angel');
    names.push('Oscar');
    names.push('Kvon');
    names.push('Sergio');

    console.log(names);

    printNamesInCaps(names);

    let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234];
    printSumOfNums(numbers);

}
/**
 *print the sum of the numbers inside the array
 * 
 */
/*function printSumOfNums(numbers){
    for(let j=0; j<numbers.length;j++) {
        let solution=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9]+numbers[10]+numbers[11]+numbers[12];
        console.log(solution)
    }
}*/

function printSumOfNums(listOfNumbers){
    let sum=0;
    for(let i=0; i< listOfNumbers.length;i++){
        let num=listOfNumbers[i];
        //sum=sum+num;
        sum +=num;
    }
    console.log("The sum of numbers is",sum)
}
/**
 * create the functions
 * use a for loop to get each of the names
 * console log the name
 * 
 * console log the name in capitals
 */
function printNamesInCaps(listOfNames){
    for(let i=0;i<listOfNames.length;i++){
        console.log(i);
        
        let name=listOfNames[i];
        console.log(name.toUpperCase());
    }
    
}


/**
 * create a sum function
 * that receives 2 parameters
 * returns the sum of those parameters
 */

function sum(num1,num2){
    return num1+num2;
    console.log(result)
}
//test2
function test2(age){
    console.log(age)
}
//print the age

function sayHello(){
    console.log("Angel Garcia")
}
//wait for the HTML to be rendered
// then execute init fn
window.onload=init;
