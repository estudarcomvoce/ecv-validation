ecv-validation
==============

A declarative form validation micro-framework 

# Getting started
```bash
# add to your dependnecies

# yarn
$ yarn add "estudarcomvoce/ecv-validation#master"

# npm
$ npm install "github:estudarcomvoce/ecv-validation#master"
```


## Defining a validation

```typescript
import { Validation, required, longerThan } from 'ecv-validation'

const validation = new Validation(
  'name',                   // The key of the property to be validated
  'username',               // how the field shall be refferred to in the error message
  'number',                 // The type of the field
  [required, longerThan(5)] // A list of validations-rules for the field, here it is required and must be longer than 5 characters 
);
```

## Defining a custom validationRule

```typescript
import { ValidationRule } from 'ecv-validation'

const isValidUUID = (alias: string, value: string): ValidationRule => {
  const uuidRegex = /^[0-9\w]{8}-?([0-9\w]{4}-?){3}[0-9\w]{12}$/

  if (uuidRegex.test(value)) {
    return {
      error: `${alias} is not a valid UUID`,
      invalid: true
    }
  } else {
    return {
      error: '',
      invalid: false
    }
  }
}
```

## Validating all fields of a form (eg. form onSubmit handler)

```typescript
import { Validation, ValidationRunner, required, longerThan, shortherThan, FormData } from 'ecv-validation'

interface UserData {
  name: string;
  email: string;
}

const nameValidation = new Validation(
  'name',
  'username',
  'string',
  [required, longerThan(4), shorterThan(256)] // name is required and must be between 5 and 255 characters
);

const emailValidation = new Validation(
  'email'
  'email',
  'string',
  [required] // email is required
);

const validationRunner = new ValidationRunner<UserData>(
  nameValidation,
  emailValidation
)

validationRunner.runAll({
  name: 'John',
  email: 'jconnor@skynet.com'
})
/* > {
 *     errors: {
 *       email: "",
 *       name: "username must be longer than 4 characters "
 *     },
 *     invalid: {
 *       email: false,
 *       name: true
 *     },
 *     values: {
 *       name: "John",
 *       email: "jconnor@mail.com"  
 *     }
 *   } 
```

## Validating a single field (eg. input onChange handler)

```typescript
// same setup as previous example

const oldData = {
  name: 'John Connor',
  email: 'jconnor@skynet.com'
}

// validating a single field needs the data before change
validationRunner.run(oldData, 'email', '')
/* > {
 *    errors: {
 *       email: "email field is required",
 *       name: ""
 *     },
 *     invalid: {
 *       email: true,
 *       name: false
 *     },
 *     values: {
 *       name: "John Connor",
 *       email: "jconnor@mail.com"  
 *     }
 *   } 


```