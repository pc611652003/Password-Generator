# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at some [examples of special characters on the OWASP Foundation website](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![An app window with the label Password Generator, an input field labeled Your Secure Password, and a Generate Password button.](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

## Result

URL of the deployed application : https://pc611652003.github.io/Password-Generator/

URL of the GitHub repository : https://github.com/pc611652003/Password-Generator

The Application will start at this page.
![Starting Page](./screenshots/Start.png "Starting page of the application")

After user click on the "Generate Password" button, user will be asked for the length of password.
![Length Prompt](screenshots/lengthOfPW.png "Asking for length of password")
Error message will be displayed if the input is not an integer between 8 and 128.
![Length Error Alert](screenshots/lengthOfPWError.png "Show Error and ask again if input value is invalid")
If the input is valid, the user will be asked to confirm. 
![Length Confirm](screenshots/lengthOfPWConfirm.png "Asking user to confirm the length")
If the user confirmed, an alert will be displayed to brief the user for next step.
![Length Confirmed Alert](screenshots/lengthOfPWConfirmed.png "Briefing for next step")
If the user denied the length, an alert will be displayed to redirect the user back to input length.
![Length Reconsider Alert](screenshots/lengthOfPWReconsider.png "Redirect user back to input length")

After the user finished input the length, user will be ask if lowercase characters are included in the password.
![Lowercase Confirm](screenshots/lowercase.png "Ask if lowercase characters are included")
Then user will be ask if uppercase characters are included in the password.
![Uppercase Confirm](screenshots/uppercase.png "Ask if uppercase characters are included")
User will be ask if numeric characters are included in the password.
![Numeric Confirm](screenshots/numeric.png "Ask if numeric characters are included")
Finally, user will be ask if special characters are included in the password.
![Special Confirm](screenshots/special.png "Ask if special characters are included")
Display error message if no character types are included. Then redirect user to choose again.
![None Included Error](screenshots/includingTypeError.png "Show Error if no character type included")
After user has chosen character types to be included, user will be asked to confirm the selection.
![Type Confirm](screenshots/includingTypeConfirm.png "All selected types are listed for user to confirm")
User will be alert the password is being generated, once user confirm the selections.
![Type Confirmed Alert](screenshots/includingTypeConfirmed.png "Once confirmed, password will be generated")
If user want to consider the choice, an alert will redirect user back to the questions for character type choices.
![Type Reconsider Alert](screenshots/includingTypeReconsider.png "Redirect user back to choose character types")

Once everything is confirmed, the password is generated and displayed.
![Result Page](screenshots/DisplayPW.png "Display the password generated according to user's demand")
