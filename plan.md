## Description

An App to track Expenses Balance always visibe User can track Expenses see the Balance and the Expense LOG

## Data Strucutre

[{ id: date.now ,amount: number, description: string, type(income/expense): string, Category(after v1): string, date: string }]


## Decicions 
 
 To get Balance create a new array from the main one with only the numbers and sum them against each other

## MVP v1
- Grid Layout
- inputs add li elements
- Balance gets updated 
- delete Logic
- edit logic
- Data Persits

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
