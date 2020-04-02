document.write('JavaScript Assignments ')
 
document.write (' Alert') 
 
document.write (' 1. Write a script to greet your website visitor using JS alert box. 2. Write a script to display following message on your web page:      (Hint : Use line break \n ')

document.write (' Variables for Strings ')
 
document.write (' 1. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. ')
 
document.write  ('2. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display this in browser through JS.  (Hint: use document.write()) ')
 
 
 


alert('hello \n how are you')
var hello='hello world  ....'
alert(hello)

var book='A smarter way to learn js'
console.log(book)




 
document.write (' 1. Declare a variable called age & assign it your age. Show your age in an alert box. ')
 
document.write (' 2. Declare a variable called birthYear & assign to it your birth year. Display this in browser through JS.   (Hint: use document.write()) ') 
 
var age=22;
alert('my age '+age)
var birthyear=1998
console.log('year '+birthyear)

var value1=0
var value1 =+prompt('value  after declerarion is ')
alert('initalizatin value'+value1)
alert('increment value  '+ (++value1))
value1=value1+7
alert('add 7 '+value1)
value2=+prompt('Decrement value ')
alert('decremnet value ' +(value1-value2))
var div=(value1-value2)
alert('reminder ' +(div%3))


// var a = 2, b = 1; var result = --a - --b + ++b + b--; 

//  console.log('a=2  '+(--a));
//  console.log('a=2 b=1  --a - --b' +( --a - --b));
//  console.log ('a=2 b=1 '+ (--a - --b + ++b));
//  console.log(--a - --b + ++b + b--)

//  var cel = +prompt('Enter fahrenhit','fahrehit')
//  var vcel=(cel-32)* (5/9)
//  alert('C ' + vcel)

//  var hcel = +prompt('Enter celuius','celuius')
//  var vhcel=(hcel*9/5)+ 32

//  alert('F ' + vhcel)


//  var uname=prompt('User name','name')
//  var gender=prompt('Gender','male ,female')
//  if (gender==='male'){
//      alert('Name  '+uname+ 'good morning sir')   
//  }
//  else if (gender==='female') {
//       alert('Name  '+uname+ 'good morning ma am')
//  }
//  else {
//      alert('invalid gender')
//  }



//  Red = Must stop Yellow = Ready to move Green = Move now 

//  var color =prompt('enter color','red yellow green');
//  if (color==='red'){
//      alert('Must stop')
//  }
//  else if (color==='yellow') {
//         alert('Read to move')
//  }
//  else if (color==='green') {
//      alert('Move now')
//  }
//  else {
//      alert('invalid color input')
//  }


//  var vinput=+prompt('enter number')
//      if (vinput>0){
//          alert('posative')
//      }
//      else if (vinput<0) {
//          alert('nagative')
//      }
//      else {
//          alert('zero')
//      }


// var jspsw='asdfg1234'
// var psw=prompt('enter password','passwors')
// if(jspsw===psw){
//     alert('correct password')
// }
// else {
//     alert('incorrect passworsd')
// }


// var time =+prompt('Enter time ')

// if (time >=0000 && time<1200) {
//     alert('good morning')

// }
// else if (time>=1200 && time<1700)
//  {
//      alert('good after noon')
//  }
//  else if (time>=1700 && time <2100 ) {
//      alert('good evenning')
//  }
//  else if (time>=210 && time <=2400) {
//      alert('good night')
//  }
//  else {
//      alert('Invalid time ')
//  }


//  var student=['michal ','jhon ','tony '];
//  var mar=[320,230,480];

//  for (i=0;i<student.length;i++){
//      console.log('score of '+student[i]+'is '+mar[i]+'.percentage  '+(mar[i]/500*100))
//  }


// var color=[];
// console.log(color)
// var addcolor=prompt('which color to add begning of arry')
// color.unshift(addcolor)
// console.log(color)
// var addcolor=prompt('which to add end of ')
// color.push(addcolor)
// console.log(color)
// for (i=0;i<=1;i++) {
//     var addcolor=prompt('which color to add begning of arry')
//     color.unshift(addcolor)
//     console.log(color)
// }
// alert('delet start of arry')
// color.shift()
// console.log(color)
// alert('delet end of arry')
// color.pop()
// console.log(color)

// alert ('please check index postion range 0 to '+ (color.length-1))
// var pos=+prompt('please index postion ')
// var addcolor=prompt('add color index postion')

// color.splice(pos,0,addcolor)
// console.log(color)




// var tablename=0;
// var start=0;
// var end=0;

// var tablename= +prompt('which table ....')
// var start= +prompt('starting table ')
// var end = +prompt('ending table ')

// var arry=[[tablename],[start],[end]] ;

// for (tablename;start<=end ;start++) {
//     console.log(tablename+ '* '+start+ '= '+(tablename*start))
// }



// var arry=[];
// for (i=0;i<15;i++){
//    arry.push(i+'k')

// }
// console.log(arry)


// var arry=[];
// for (i=0;i<15;i++){
//    arry.unshift(i)
// }
// console.log(arry)

// var arry=[];
// for (i=0;i<15;i+=2){
//    arry.push(i)
// }
// console.log(arry)

// var arry=[];
// for (i=1;i<15;i+=2){
//    arry.push(i)
// }
// console.log(arry)

// var time=+prompt('how many fruit name enter ')
// var fruit=[]

// for (i=0;i<time;i++){
//    fname=prompt('Enter fruit name')
//    fruit.push(fname)
//    console.log(fruit)
// }
// var src=prompt('Pl enter searh fruit name')
// for (i=0;i<fruit.length;i++) {
   

//    if (fruit[i]===src) {
   
//       console.log('found  '+fruit[i]+'src'+src)
//    }
//    else { 
//       console.log('Not found')
//    }
// }


// outer loop to handle number of rows 
//  n in this case

// var star=+prompt('How many star to print')
// for(i=0; i<star; i++) {
   
    
//    for (x=star;x>i;x--){
//       document.write('*')
//       "<br>"
//    }
//    document.write('   '+"<br>")
    
// }  

// var star=+prompt('How many star to print')
// for(i=0; i<star; i++) {
   
    
//    for (x=0;x<i;x++){
//       document.write('*')
//       "<br>"
//    }
//    document.write('   '+"<br>")
// }

// var star=+prompt('How many star to print')
// for(i=0; i<star; i++) {
   
    
//    for (x=star;x>i;x--){
//       document.write('*')
//       "<br>"
//    }
//    document.write('   '+"<br>")
// }

// ************************************

// var star=+prompt('How many star to print')
// for(i=0; i<star; i++) {
   
    
//    for (x=0;x<i;x++){
//       document.write('*')
//       "<br>"
//    }
//    document.write('   '+"<br>")
// }

// // var star=+prompt('How many star to print')
// for(i=0; i<star; i++) {
   
    
//    for (x=star;x>i;x--){
//       document.write('*')
//       "<br>"
//    }
//    document.write('   '+"<br>")
// }
// *****************************  


// var max=[0]
// var number=[102,24,1,53,78,91,12,101,1]
// var max=number[0]
// console.log('arry of number '+number)
// console.log('check max '+max)

// for (i=0;i<number.length;i++) {
//     if (number[i]>max) {
//         max=number[i]
//         console.log('number '+number+'  max '+max)

//     }
//     console.log('number for loop'+number+'  max '+max)
// }
// console.log(max)

// ********************************

//  var uname = ['soh','has','imran','amjad']
//  console.log(uname)
//  uname.splice(2,2)
//  console.log(uname)
//  uname.splice(2,2,'muddy','jav')
//  console.log(uname)
//  uname.splice(2,0,'ok  ..')
//  console.log(uname)  
//  uname.splice(2,2)
//  console.log(uname)
//  uname.splice(2,2,'karman','alimughal')
//  console.log(uname)
//  uname.splice(3,0,2,5,6,7)
//  console.log(uname)

// 

// var uname=['sohail','ali','iqbal']
// console.log(uname)
// var vname=uname.slice(0,2)
// console.log(vname)
// console.log(uname)

// var uname=[5,6];
// for (i=1;i<15;i+=2){
//    uname.push(i)
// }
// console.log(uname)

// var uname=['soha'];
// var time=+prompt('Time')
// for (i=0;i<time;i++) {
//    var nam=prompt('name')
//    uname.push(nam)
//    console.log(uname)
// }

// var ser=prompt('Which name serach')
// for (x=0;x<uname.length;x++) {


//    if (uname[x].toUpperCase()===ser.toUpperCase()){

//        console.log('found '+uname)
//    }
//    else {
//        console.log('not found  '+uname[x])
//    }
// }



// var start = +prompt('which add to list postion start')

// var end = 0;
// var uname = ['ali', 'imran']
// console.log(uname.length)
// for (i = 0; i < uname.length; i++) {
//    if (start > uname.length) {
//       alert('Invalild starting point')
//       break
//    }


//    console.log(uname)
//    var start = +prompt('which add to list postion start')

//    var time = +prompt('how manya name inster')
//    for (a = 0; a < time; a++) {
//       var nam = prompt('Enter name instert')
//       uname.splice(start, end, nam)
//       console.log(uname)
//       start++
//    }
//    check = prompt('Do you want to exit pleasse ener Y /N')
//    if (check.toUpperCase() === 'Y') {
//       console.log('Exit this progrm')
//       break
//    }
// }
// var uname=['soh','ali','imran']
// console.log(uname[1]) 
// var time=prompt('How man name inster')

// for (x=0;x<time;x++){
//    var uname=prompt('name')
//    uname.push()
//     }
// for (i=0;i<uname.length;i++) {
//    if (uname[i]==='imran') {
//     console.log(uname[i])
//    }
//    else {
//       console.log('not found'+uname[i])
//    }
// }


// var uname='m ali,mughal'
// console.log(uname)
// console.log(uname.length)
// var a=uname.slice(2,3)
// console.log(a)
// var b=a.toUpperCase()
// console.log(b)
// var c=uname.slice(3,5)
// console.log(c)
// var d=b+c
// console.log(d)

// var nam='m sohail hashmani'
// for (i=0;i<nam.length;i++) { 

//    if(nam.slice(i,i) ===''){
//       console.log('space found')
      
//    }
//    else {
//       console.log('no space')
//    }
// }
