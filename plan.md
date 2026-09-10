## Description

An App to track Expenses Balance always visibe User can track Expenses see the Balance and the Expense LOG

## Data Strucutre

[{ id: date.now ,amount: number, description: string, type(income/expense): string, Category(after v1): string, date: string }]


## Decicions 
 
 To get Balance create a new array from the main one with only the numbers and sum them against each other

## MVP v1
- Grid Layout DONE
- render logs DONE
- Balance gets updated 
- delete Logic
- edit logic
- Data Persits
- live on github pages

## Post MVP v2

- Pools for Needs Wants and Savings
- Dated Views Month, Week year
- Visualization Layer

## Design

Grid Layout:
- TOP Heading full width
- MID Sidebar left Balance Middle Input Form Sidebar right Pool View
- BOTTOM 50/50 View left Logs Right Visual Layer

Color Scheme :

/* CSS HEX */
--ink-black: #0F0E19ff;
--soft-periwinkle: #A798EEff;
--lavender: #F0E7FAff;
--plum: #EEB7EEff;
--deep-navy: #101147ff;


Fonts: 


@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

## Steps

0. Setup
    - Basic HTML Structure DONE
    - CSS set Root Variables Connect to HTML DONE
    - JS Connect to HTML DONE
    - Style the form and the inputs

1. Grid Layout :
    - give children grid area names DONE
    - give parent repeat 4 1fr DONE
    - use grid areas to create the 3 x 2 Design DONE

2. Render
    - Grab inputs selects button and logs in JS DONE
    - make an empty Array DONE
    - make a render function DONE
    - inside render function empty the innerhtml DONE
    - write an foreach that goes trough array creates and appends the elements DONE
    - on button click push the input values to the array DONE
    - after submit empty the input fields DONE
    - on empty inputs submit return error msg
    - call render on button click and at startup DONE

3. Update Balance
    - convert amount into number when pushing to the array DONE
    - write a function calcBalance that takes an array as an argument DONE
    - use filter to get two arrays from the main one only expenses and only incomes DONE
    - then use reduce on each one to get two sum values DONE
    - cacl them in the balance var DONE
    - add show in dom in the render function DONE

