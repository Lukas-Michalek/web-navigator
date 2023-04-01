# **Web Navigator**
---
## **Project Overview**
Web Navigator project, simulates the navigational operations of a web browser such as :

- opening a new web page,
- navigating back a page and
- going forward a page. 

To maintain the history of visited pages, `Stack` class will be used with a `backPages` stack and a `nextPages` stack.

    
![https://content.codecademy.com/PRO/skill-paths/jsip/Stacks.svg](https://content.codecademy.com/PRO/skill-paths/jsip/Stacks.svg)
    

When we open a new page, we push the previous page on the `backPages` stack. When we revisit an old page and then visit a new page from there, we clear any content in the `nextPages` stack.

When we revisit a back page, we push the current page on the `nextPages` stack. Like the back button and the next button on a web browser, the back page and next page operations can be enabled or disabled depending on the state of the two stacks. For example, if the `backPages` stack is empty, the back operation is disabled and will be enabled only when the stack has content.

User input is required to:

- enter a new page to be visited,
- navigate backward or forward a page, and
- to quit the program.

The option to navigate forward or backward is conditional depending on user input and the state of the stacks.

At every operation other than quitting, we display information about the current page and the top element of the two stacks

<br>

## **Getting Started**

<br>

### **Downloading the Source Code**
In order to download this project you will need to 'clone the repository' first.

To clone this repository please navigate on your GIT BASH to which we refer to as Terminal(If it is not installed please download and install it on this link)

1. Create folder where you would like to clone this project
```
$ mkdir folder_name
```

2. Navigate to that folder

```
$ cd folder_name
```

3. Clone the project to your folder
```
$ git clone https://github.com/Lukas-Michalek/web-navigator.git
```
 

### **Installing necessary packages**
The package necessary `prompt-sync` is already included in source code.
In case of nay problems, feel free to reinstall this package by following command

```
$ npm i prompt-sync
```

## **Running the program**
In order to run this program you will need to start it by following command(while in root directory):

As stated in Project Overview, user input will be necessary for program to work.
In the terminal, execute node script.js.

```
$ node script.js
```

User can navigate through program by using these commands:

 - `n` -> Navigate forward a page by employing nextPage() function
 - `b` -> Navigate back a page by employing backPage() function
 - `q` -> To quit the program
 - `Entering url` -> If the user chooses to enter an url we create a new page based on the url by employing newPage(user_url) funcion



## **Technologies used**
- Javascript
- Node

## **Acknowledgment**
This project was part of the Full Stack Software Developer Path on Codecademy

## **Author**
Lukas Michalek

## **Licence**
This project is licensed under the [MIT](https://mit-license.org/)