Title: Getting Familiar with setInterval() and setTimeout() 
===============================
this project will review two example for using setInterval() and setTimeout() functions in JavaScript. 

# Getting Started

there are two folders in the repository. each folder contains one .html file and .js file. The html file connected to corresponding javaScript file. in order to run *setInterval()* file you need to go to the folder related to serInterval and open the *setInterval.html* file. You need to take similar steps in order to run *setTimeout()* .

# Prerequisties 
there is no prerequirments for this project.


# How does it work:
In this section we are going to explain how these two functions behave in browser.

## 1- setInterval()

it is a function that can set to repeat certain task in time portion between each execuatin. for example the program can show simple alert to the user each 5 minutes. 
the default syntax based on MDN website is:
`setInterval(() => alert(), 50000);`

as you can see in the code set interval will accept two parameters , first parameter is an anynomous function (we use arrow function) , and next parameter is ineteger of time in milisecond format.
in above example each 50 thousand milisecond we will show an alert. 50 thousand milisecond is equal to 50 minutes. 
it is important to know that this function will be executed in unlimitedly until you stop it. in this example we are not going to stop it.

## 2- setTimeout()

as its name represents, you can show an action after certain amout of time. look at the cdoe example: 
`setTimeout(() => alert(), 2000);`

setTimeout will accept two parameters, first is ananymous function, and second is the time in milisecond measurment. in the given example, we will show an alert to the browser in 2 thousand milisecond which is equal to 2 second. 

#TESTING
the testing measurment has done in two defferent folders and all file in Mzila Firefox, Google Chrome, Safari, and Opera. 
the result show all fo them show same result.





 -- Authors -- 
Mani Tahriri
-- email -- 
m.tahriri.z@gmail.com


