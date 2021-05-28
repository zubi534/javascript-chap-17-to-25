                   /* Array and loops 


Q1: Declare and initialize an empty multidimensional array.
(Array of arrays) */

/* var array = [];
var array = [
    [[2],[3]],
    [[5],[6]],
    [[7],[9]],

  
];    
document.write(array[1][0]); */



/* Q2 Declare and initialize a multidimensional array
representing the following matrix: */




/*   var array = [
[0,1,2,3],
[1,0,1,2],
[2,1,0,1],
   
];
document.write("<p>") 
document.write(array[0][0],array[0][1],array[0][2],array[0][3]);
document.write("<br>")
document.write(array[1][0],array[1][1],array[1][2],array[1][3]);
document.write("<br>")
document.write(array[2][0],array[2][1],array[2][2],array[2][3]);
document.write("</p>")    */



/* Q3 Write a program to print numeric counting from 1 to 10  */



/* var i ;
for (var i = 1; i <= 10; i++)
document.write("<P>"+ i+"</P>" ); */



/* Q5 Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */



/*   var fruits = [ "apple", "banana", "mango", "orange", "strawberry"]; 
{for (var i=0; i <=4; i++)
document.write("<br>" + fruits[i] );}

{for ( var i=0; i <= 4; i++)

document.write("<br>" + "Element at index " + [i] + " "+fruits[i] );}  */



/* Q6 Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */




/* var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
{for ( i=0; i <=14; i++)
document.write(counting[i] + ",");}   */


/*  var reverse = [ 1,2,3,4,5,6,7,8,9,10];
{for ( i=9; i >=0; i--)
    document.write(reverse[i] + ",");} */

/* var even = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
{
    for (i = 0; i <= 20; i =i+2)
        document.write(even[i] + ",");
}  */


/* var odd = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
{for ( i=0; i <=18; i=i+2)
    document.write(odd[i] + ",");} */

/*  var series = [ 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
{for ( i=0; i <=19; i=i+2)
  document.write(series[i]+"k" + ",");} */



/* Q7  You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */



/* var bakery = prompt("Welcome to bakery ..what you want to order sir/Mam?");
var bakerystuff = ["cake", "apple pie", "cookie", "chips", "patties"];
var flag=0;
{
   for (var i = 0; i <= 4; i++)
   {  if( bakerystuff[i]== bakery)
      { flag=1;
       document.write("<br>" + bakerystuff[i] +" is available at index " + [i]);
   }}
   if(flag==0)
   document.write("We are sorry. " +bakery+ " " + "is not available in our bakery")
}  */



/* Q8 Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12] */



/* var no = [24, 53, 78, 91, 12];
var max = 0;
for (i = 0; i <= 4; i++) {
    if (no[i] > max) {
        max = no[i];
    }
}
document.write("The largest number is" + " " + max);  */



/* Q9  Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12] */



/* var no = [24, 53, 78, 91, 12];
var min = no[0];
for (i = 0; i <= 4; i++) {
    if (no[i] < min) {
        min = no[i];
    }}
    document.write("The smallest number is" + " " + min); */




/*  Q10 Write a program to print multiples of 5 ranging 1 to
100  */



/* var i;
for (var i=5; i<=100; i=i+5)
document.write(i+","); */



           /*  String Method */




/*Q2 Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */


 /* var input = prompt("Enter your favorite phone name");
var phone = input.length;
document.write(phone); */


/* Q3 Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser */



/* var country = "pakistan";
for ( var i =0; i <=7; i++)
if(country[i]=="n")
document.write("index of n" +" " + i); */

// var num = 15.23;
// var a = num.toString();
// s =a.replace('.', '');




/* Q4  Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/




/* var greet = '    Hello World  '.replace(/\s+/g, '')

var string = greet.length-1;
document.write(string); */



/* Q5  Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/



/* var countryalphabet = "Pakistan";
countryalphabet[3]
 document.write(countryalphabet[3]); */


 /* Q7 Write a program to replace the “Hyder” to “Islam” in the
 word “Hyderabad” and display the result in your browser.*/


 /* var str = "Hyderabad";
 document.write(str);
var res = str.replace("Hydera","Islama");
document.write("<br>" +res); */



/* Q8 Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.*/


/* var str = "Ali and sam are best friends.They play cricket and football together";
 document.write(str);

var res = str.replaceAll("and","&");
document.write("<br>" +res); */



/* Q10 Write a program that takes user input. Convert and
show the input in capital letters */




/* var input = prompt("Enter here");
var uppercase = input.toUpperCase();
document.write(uppercase); */



/* Q11 Write a program that takes user input. Convert and
show the input in title case. */



/* var input = prompt("Enter your programe");
input=input.charAt(0).toUpperCase() + input.slice(1);
document.write(input); */



/* Q12 Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */



/* var d = 35.36;
var s = d + '';
s =s.replace('.', '');
document.write(s) */


/* Q14 You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. */



/* var bakery = prompt("Welcome to bakery ..what you want to order sir/Mam?");
var bakerystuff = ["cake", "apple pie", "cookie", "chips", "patties"];
bakery=bakery.toLowerCase();
var flag=0;
{
    for (var i = 0; i <= 4; i++)
    {  if( bakerystuff[i]== bakery)
       { flag=1;
        document.write("<br>" + bakerystuff[i] +" is available at index " + [i]);
    }}
    if(flag==0)
    document.write("We are sorry. " +bakery+ " " + "is not available in our bakery")
}  */





/* Q16 Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */

/* var string = 'university of karachi';
string=string.split('');
for (var i = 0; i < string.length; i++)
    document.write("<br>" + string[i]); */




/* Q17 Write a program to display the last character of a user
input.*/



/* var input = prompt("Enter here");

var newString = input.charAt(input.length-1);
document.write(newString); */


/* Q18 You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string. */



/* var count=0;
var string = "the quick brown fox jumps over the lazy dog";
string=string.split(" ");
for ( var i=0; i<= string.length-1; i++)
if ( "the" == string[i])
 {   count++;}
    document.write(count); */
