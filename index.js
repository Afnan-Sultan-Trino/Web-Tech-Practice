console.log("Welcome To JS World")

/*
{
    let name="Trino"
    console.log(name);
}
console.log(name)     //it will give eror using "let" variable


{
    var name="Trino"
    console.log(name);
}
console.log(name)     //it will not give eror using "var" variable


{
    let name="Trino"
    name="Sami"
    console.log(name); // it will print latest name "Sami"
}
    

{
    const name="Trino"
    name="Sami"
    console.log(name); //it will show error for const variable
}
    */

let c=10;
 //let c=20; //error because already declared

/* let a=10;
 let b=10.5;
 let d=true;
 let e=null; //object data type
 let f;
 let g =[1,2,3,5] //object data type

 console.log(typeof a,typeof b,typeof d,typeof e,typeof f, typeof g);

 var a=10;
 var b=20;
 if(a>b){
    console.log("Hiiii")
 }
 else{
    console.log("BYEE")
 }

 var q=10;
 var w="10";
 if(q==w){
    console.log("Hiiii")  //it will print "Hiiii" because (==) will check only value, not data type
 }
 else{
    console.log("BYEE")
 }
    

 var q=10;
 var w="10";
 if(q===w){
    console.log("Hiiii")  
 }
 else{
    console.log("BYEE") //it will print "Bye" because (===) will check data type
 }
    */

 var q=10;
 var w=20;

 let condition=(w>q)?"w is greater":"w is smaller"  //ternary operator
 console.log(condition)

 //switch case:

 a=10;
 switch(a){
    case 10:
        console.log("a is 10");
        break;
    case 20: 
    console.log("a is 20");
        break; 
        default:
            console.log("None")
 }
 
 //for loop

 for(let i=1;i<=10;i++){
    console.log(i)
 }

 var arr=[1,2,3,4,5]
 console.log(arr)  // print will look like [1,2,3,4,5]

 var arr1=[9,8,7]
 for(let i in arr1){
    console.log(arr1[i])   //print will look like 9
                          //                      8
                           //                     7
 }

 //functions 

 function fnName(){
    console.log("Hello World and Bye")
 }
 fnName()


 // Return type function

  function fnName1(s,t){
    return s*t;
 }
 console.log(fnName1(3,3));

 //Arrow function :

 let multi= (a,b) => a*b;
 console.log(multi(2,9))


