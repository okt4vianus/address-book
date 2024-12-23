# Address Book

Simple Address Book Application for Contact Management System

Live at: <https://address-book.oktavianusrtasak.com>

## Feature

- Add Contact
- Edit Contact
- Delete Contact
- Empty Trash

## Tech Stacks

- HTML
- JavaScript

## Pseudocode

<details>
<summary>Code</summary>

```
BEGIN
DISPLAY Existing Contact Top 7

DISPLAY main menu:
1. Create Contact
2. Edit Contact (if data available)
3. Delete Contact (if data available)
4. Empty Trash (if data available)

GET User Choice

IF Choice == 1 THEN
  PROMPT user for new contact details (name, company, email, phone number, date of birth)
  VALIDATE input (required name)
  ADD contact to the contact list (generate random id)
  DISPLAY Existing Contact Top 7
ELSE IF Choice == 2 THEN
  PROMPT user to select a contact to edit
  ALLOW user to edit the selected contact
  VALIDATE input
  UPDATE contact list
  DISPLAY Existing Contact Top 7
ELSE IF Choice == 3 THEN
  PROMPT user to select a contact to edit
  ALLOW user to delete the selected contact
  VALIDATE input
  MOVE contact to trash
  DISPLAY Existing Contact Top 7
ELSE IF Choice == 4 THEN
  PROMPT user to select a contact to delete forever
  PROMPT user to confirm delete forever
  IF confirmed THEN
    DELETE contact in trash
  ELSE
  RETURN to main menu

RETURN to main menu
END
```

> ...

</details>

## Previews
