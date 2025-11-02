# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

Encapsulation has two core components:
1. The bundling or grouping of data and the functions that use that data inside of a single object.
2. The restriction of access to that data such that it can only be accessed in a controlled manner.

Encapsulation is a useful principle of coding because it guides us to create more consistent and predictable code through well-designed class interfaces.

## Question 2

The value of `this` is determined based on the **execution context** in which it is used. 
* In a `constructor` function like `Counter`, the value of `this` will be the object created and returned by the constructor. In the example, the value of `this` first references the object that is eventually stored in `counterA` and then references the object that is eventually stored in `counterB`.
* In a method like `increment`, the value of `this` references the object that invokes the method. When `counterA.increment()` is invoked, the value of `this` is the object `counterA`. When `counterB.increment()` is invoked, the value of `this` is the object `counterB`.

`this` is particularly useful with classes because it allows us to define a single method that can be used by many instances of a class. Those methods are able to reference the specific instance that is invoking the method without any hardcoding or duplicated code.

## Question 3

Polymorphism is the idea that many different objects can be used in the same manner even if the underlying details are different. For example, you may have a `SpanishTeacher` class, a `FrenchTeacher` class, and an `EnglishTeacher` class that all are subclasses of a `LanguageTeacher` class and each implement their own version of a method `greetClass()`. Instances of each subclass can all invoke `greetClass()` but the outcome will be different based on the different implementations.

```js
class LanguageTeacher {
  constructor(language) {
    this.language = "language"
  }
  greetClass() {
    // To be implemented by subclasses
  }
}

class SpanishTeacher extends LanguageTeacher {
  constructor() {
    super('Spanish');
  }
  greetClass() {
    console.log('Hola clase');
  }
}

class FrenchTeacher extends LanguageTeacher {
  constructor() {
    super('French');
  }
  greetClass() {
    console.log('Bonjour la classe');
  }
}

class EnglishTeacher extends LanguageTeacher {
  constructor() {
    super('English');
  }
  greetClass() {
    console.log('Hello class');
  }
}

const teachers = [new SpanishTeacher(), new FrenchTeacher(), new EnglishTeacher()];
teachers.forEach((teacher) => teacher.greetClass());
// Hola clase
// Bonjour la classe
// Hello class
```

## Question 4

I would use inheritance in this application by defining a `Pet` superclass ("parent class") with properties `name`, `energy`, and `happiness` and the method `sleep` which would restore the `energy` of the pet instance invoking it. I would then create the `Cat`, `Dog`, and `Bird` subclasses that extend the `Pet` class and define the `hunt`, `chase`, and `fly` methods for each subclass respectively. Each of those methods could increase the `happiness` of the instance by some amount while reducing the `energy` level and may print out a unique message according to the class of animal.

The advantage of inheritance here is that I only need to define the `name`, `energy`, and `happiness` properties and the `sleep` method once in the `Pet` superclass. The subclasses `Cat`, `Dog`, and `Bird` inherit those properties and method and just have to define their own `hunt`, `chase`, and `fly` methods.