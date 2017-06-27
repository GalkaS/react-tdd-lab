
## Prerequisites
* nodejs >= 6 (see https://nodejs.org/en/download/ )
* npm or yarn

## Instructions
```bash
# clone the repo
git clone https://github.com/dr-impossible/react-tdd-lab
cd react-tdd-lab

# Install packages
npm install

# Run tests
npm test

# *OR* Run in browser
npm start
```

## Reference Documentation
Jest: https://facebook.github.io/jest/docs/en/api.html
Enzyme: http://airbnb.io/enzyme/

## 1. Basic TDD of a function
Files:
* src/validators/phoneNumber.js
* src/validators/phoneNumber.test.js

Create a function which validates a string that contains a 10 digit phone number.
It should contain the following characteristics:
* it must contain exactly 10 digits (0-9)
* if it contains separators, the digits must be in groups of 3, 3, 4. E.g., 647-555-1212
* valid separators are spaces ` ` or dashes `-`
* no other characters are permitted

When the input is valid, the function will return `undefined`
When the input is invalid, the function will return a string containing an error message to display

## 2. Basic TDD of a React Component
Files:
* src/components/PhoneNumberInput.js
* src/components/PhoneNumberInput.test.js

Create a component that renders an input field
* it has a prop called validate, which takes a function
* the component should render if validate is not provided
* on blur, the component should call validate with the input field's value
* if the validate function returns undefined, the input was valid. The .error div should not render
* if the validate function returns a string, the input was invalid. The .error div should render with the error message

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). See README.create-react-app.md for original readme.
