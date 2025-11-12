# Object-Oriented Programming Assessment

**Table of Contents:**
- [Assessment Overview](#assessment-overview)
  - [Setup Instructions](#setup-instructions)
  - [Running Tests \& Linter for Code Style](#running-tests--linter-for-code-style)
  - [Submission Instructions](#submission-instructions)
  - [What Resources Can I Use?](#what-resources-can-i-use)
  - [FAQ](#faq)
  - [Good Luck! 🚀](#good-luck-)
- [Section 1: Short Response](#section-1-short-response)
  - [Question 1: Encapsulation](#question-1-encapsulation)
  - [Question 2: this Keyword](#question-2-this-keyword)
  - [Question 3: Polymorphism](#question-3-polymorphism)
  - [Question 4: Inheritance](#question-4-inheritance)
- [Section 2: System Design](#section-2-system-design)
  - [Scenario](#scenario)
  - [Deliverables](#deliverables)
  - [Requirements](#requirements)
- [Section 3: Class Implementation](#section-3-class-implementation)
  - [Problem 1: Debug Broken Code - Bank and BankAccount](#problem-1-debug-broken-code---bank-and-bankaccount)
  - [Problem 2: Implement from Scratch - Pokemon](#problem-2-implement-from-scratch---pokemon)
  - [Problem 3: Implement from Scratch - Phone and iPhone](#problem-3-implement-from-scratch---phone-and-iphone)

Welcome to your first module assessment! This assessment tests your understanding of JavaScript fundamentals including variables, functions, control flow, loops, arrays, and objects.

## Assessment Overview

The assessment has 3 sections:

1. **Short Response** - Answer questions about JavaScript concepts
2. **System Design** - Design a system and create a UML diagram that reflects it
3. **Class Implementation** - Implement JavaScript classes that satisfy the given requirements.

Your repository contains the following relevant files:

```
swe-assessment-2-oop/
├── README.md                          # This file - your instructions
├── rubric.md                          # The grading rubric for this assessment
├── src/
│   ├── short-response.md             # Section 1: Answer questions here
│   ├── system-design.md              # Section 2: Include a link to your design and your Loom recording
│   ├── pokemon.js                    # Section 3: Problem 1
│   ├── bankAccount.js                # Section 3: Problem 2
│   └── pokemon.js                    # Section 3: Problem 3
└── tests/
    ├── coming soon...
    └── coming soon...
```

--- 

### Setup Instructions

Clone the Repository

```bash
git clone <repository-url>
cd swe-assessment-2-oop
```

Switch to a `draft` branch

```bash
git checkout -B draft
```

Install Dependencies

```bash
npm install
```

Verify Setup

Run the test suite to make sure everything is working:

```bash
npm test
```

You should see tests running (most will fail initially - that's expected!).

--- 

### Running Tests & Linter for Code Style

**Run all tests:**
```bash
npm test
```

**Run tests for a specific section:**
```bash
npm test from-scratch
```

**Run tests in watch mode (re-runs on file changes):**
```bash
npm test -- --watch
```

**Check for linting errors:**
```bash
npm run lint
```

---

### Submission Instructions

Before submitting your assessment, go through this checklist to ensure you haven't missed any critical details!

**Submission Checklist:**
- [ ] All questions in `src/short-response.md` are answered
- [ ] All functions in `src/from-scratch.js` are written
- [ ] All links are provided in `src/system-design.md` are fixed
- [ ] Short responses have been proofread and cleared of any typos or grammar mistakes.
- [ ] Run `npm test` - as many tests as possible should pass
- [ ] Run `npm run lint` - fix any errors
- [ ] Remove any `console.log` statements used for debugging
- [ ] Remove any commented-out code

**How to Submit:**

1. Commit your changes:
  
    ```bash
    git add -A
    git commit -m "Completed assessment"
    ```

2. Push to GitHub:
   
    ```bash
    git push
    ```

3. Create a pull request to merge `draft` into `main` and tag your instructor for review.

4. Submit on Canvas:

   - Submit the link to your pull request on Canvas
   - Double-check that your latest code is visible on the `draft` branch in GitHub

---

### What Resources Can I Use?

**Allowed Resources:**
- ✅ MDN Documentation
- ✅ Your notes from class
- ✅ Previous assignments and labs
- ✅ Running code in Node to test ideas

**NOT Allowed:**
- ❌ AI tools (ChatGPT, Claude, Copilot, etc.)
- ❌ Asking classmates for help
- ❌ Searching for solutions online
- ❌ Posting questions on Stack Overflow, Reddit, etc.

**If You're Stuck:**
- Read the error messages carefully
- Check the test files to understand what's expected
- Use `console.log()` to debug your code
- Take a break and come back with fresh eyes
- Remember: struggling is part of learning!

---

### FAQ

**Q: Can I use AI tools to check my work?**  
A: No, you may not. You are allowed to use official documentation (e.g. MDN), your notes, and our course GitBook for this exam. You may also use StackOverflow. However, you may not use LLMs, such as ChatGPT or Claude to support you on this exam.

**Q: Can I use AI tools to check my writing?**  
A: You may use Grammarly to proofread your writing to ensure that it is grammar-error and typo-free.

**Q: What if I don't finish in 6 hours?**
A: You can request a 1-day extension. Speak with an instructor.

**Q: Do all my tests need to pass?**
A: Not necessarily. Partial credit is awarded based on the rubric. Do your best!

**Q: Can I use Google?**
A: You can use MDN and official documentation, but don't search for solutions to the specific problems. Feel free to use the Marcy GitBook, your own notes, and past assignments.

**Q: What if my video is slightly over 4 minutes?**
A: A few seconds over is fine. Just avoid excessive rambling.

**Q: Can I resubmit if I'm not happy with my score?**
A: Talk to your instructor about retake options.

--- 

### Good Luck! 🚀

Remember:
- Read all instructions carefully before starting
- Don't spend too much time on one question - move on and come back
- Save your work frequently (`git commit` regularly)
- Test your code as you write it

If you have questions about the instructions (not the content), ask an instructor.

## Section 1: Short Response

### Question 1: Encapsulation

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

### Question 2: this Keyword

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

### Question 3: Polymorphism

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

### Question 4: Inheritance

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

--

## Section 2: System Design

### Scenario
You are tasked with designing an **online restaurant ordering system**. Your system design should capture the *relationships* between objects, the *properties* and *methods* that describe their behavior, and the *data flow* that connects them.

**System Functionality Requirements**:
The system should be able to handle the following functionality:
* A restaurant can manage the items in their menu
* A customer can place an order with items from the restaurant's menu
* An order can be marked as "pending", "in progress", "picked up", or "delivered"

**Constraints**:
* Restaurants in this system are assumed to be pickup or delivery. No dining-in.

### Deliverables

1. **UML Class Diagram**  
   - Must include all classes, properties, methods, and relationships with correct multiplicity notation and association labels.

2. **3–5 minute recorded explanation** covering:
   - Why you chose the specific relationships and class responsibilities.  
   - How your system handles each of the system functionality requirements above: 
   - At least one design decision you made and what alternatives or trade-offs you considered to arrive at your final design.

For the recording, we highly recommend that you write out the key points of your explanation in bullets in teh `src/system.design.md` file.

### Requirements

Your class system _must_ have the following:

1. Include at least three interacting classes with at least one one-to-many relationship 

2. Model relationships using arrows and appropriate multiplicity notation:
  * Exactly one: `1`
  * Zero or one: `0..1`
  * Zero or more: `0..*`

3. Annotate relationships with **association labels** to describe each relationship (e.g., "is created by", "creates many", "has one", etc...).

4. Include detailed class definitions with:
   * **Properties** (attributes) and their **data types**.
   * **Methods** (behaviors) and their **named parameters**.

## Section 3: Class Implementation

### Problem 1: Debug Broken Code - Bank and BankAccount

**Instructions:** Look at the file `src/bank.js`. It was generated by AI and has several bugs. Fix them!

First, read through the code carefully to understand what the program *should* do. 

Then, comment out the broken code and replace it with your fixed code.

---

### Problem 2: Implement from Scratch - Pokemon

**Instructions:** Create a Pokemon class with the following specifications:

- **Instance Properties:**
  - `name` (String, public, set by the constructor)
  - `type` (String, public, set by the constructor)
  - `health` (Number, *private*, starting value of `100`)
  - `level` (Number, *private*, starting value of `1`)
- **Instance Methods:**
  - "Getter" methods for the `health` and `level` private fields. Bonus points if you use the `get` syntax!
  - `levelUp()` - increases `level` by `1` and increases `health` by `10`. Then print `"{name} leveled up to level {level}!"`.
  - `isFainted()` - returns `true` if `health` is `0` or below, `false` otherwise.
  - `attack(targetPokemon)` - reduces the target Pokemon's `health` by an amount equal to `10` times the attacking Pokemon's `level`. Then print `"{name} attacked {target.name}!"`.
- **Static Properties**
  - `allPokemon` (array tracking all created Pokemon)
- **Static Methods**
  - `getTotalPokemon()` - returns count of all Pokemon created
  - `findByName(name)` - searches the `allPokemon` array and returns matching Pokemon

Test your code with following example usage:

```js
const charizard = new Pokemon("Charizard", "Fire");
const squirtle = new Pokemon("Squirtle", "Water");

// 1. Checking instance properties
console.log(charizard); // Pokemon { name: "Charizard", type: "Fire" }
console.log(squirtle); // Pokemon { name: "Squirtle", type: "Water" }

// 2. Leveling up a Pokemon
squirtle.levelUp(); // Squirtle leveled up to level 2!
squirtle.levelUp(); // Squirtle leveled up to level 3!
squirtle.levelUp(); // Squirtle leveled up to level 4!

// 3. Checking the level
console.log(squirtle.getLevel()); // 2
// OR
console.log(squirtle.level); // 2


// 4. Checking on health
console.log(squirtle.getHealth());   // Should be 100
// OR
console.log(squirtle.health);   // Should be 100


// 5. Attacking until one faints
while (!charizard.isFainted()) {
  squirtle.attack(charizard);  
}
console.log("Squirtle has fainted!");


// 6. Finding a Pokemon instance
console.log(Pokemon.findByName("Charizard")); // Pokemon { name: "Charizard", type: "Fire" }


// 7. Viewing count of all Pokemon
console.log("Total Pokemon:", Pokemon.getTotalPokemon()); // 2
```

---

### Problem 3: Implement from Scratch - Phone and iPhone

**Instructions:** Create a class hierarchy for phones with inheritance:

**Phone class (parent):**

Create a `Phone` class with the following:

- Instance Properties:
  - `brand` (String, public, set by the constructor)
  - `model` (String, public, set by the constructor)
  - `password` (String, private, set by the constructor)
  - `batteryLevel` (Number, public, starting value of `100`) 
- Instance Methods:
  - `makeCall(number)` - decreases battery by `5`, returns `"Calling {number}"`
  - `charge()` - sets battery back to `100`, returns `"Phone fully charged"`
  - `unlock(password)` - returns `true` if the provided password matches the private password. Otherwise returns `false`.

Test your code with following example usage:

```js
const flipPhone = new Phone("Nokia", "Flip", "TimeToLearn882");
console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// 1. Making a call and checking battery
console.log(flipPhone.makeCall("123-456-7890")); // Calling 123-456-7890
console.log(flipPhone.battery); // 95

// 2. Charging and checking battery
console.log(flipPhone.charge("123-456-7890")); // Phone fully charged
console.log(flipPhone.battery); // 100

// 3. Unlocking the phone
console.log(flipPhone.unlock("TimeToLearn882")); // Phone unlocked
console.log(flipPhone.unlock("TimeToLearn882")); // Invalid Password
```

**iPhone class (child):**

Create a `iPhone` class with the following:

- Is a subclass of the `Phone` class
- The `brand` should always be set to `"Apple"`
- One additional property: `numberOfCameras` (Number, public, set by the constructor)
- Override `makeCall(number)` to return `"Calling {number} using FaceTime audio"`
- New method: `faceTime(name)` - decreases `battery` by 10, returns `"Facetiming {name}"`

Test your code with following example usage:

```js
const smartPhone = new iPhone("iPhone 14 Pro", "TimeToLearn882", 3);

console.log(smartPhone); // iPhone { brand: "Apple", model: "iPhone 14 Pro", numberOfCameras: 3, batteryLevel: 100}

// 1. Making a call 
console.log(smartPhone.makeCall("555-1234")); // Calling 555-1234 using FaceTime audio
console.log(smartPhone.batteryLevel); // Should be 95

// 2. Using the faceTime method
console.log(smartPhone.faceTime("Alice")); // Facetiming Alice
console.log(smartPhone.batteryLevel); // Should be 85

// 3. Charge the phone
console.log(smartPhone.charge()); // Phone fully charged
console.log(smartPhone.batteryLevel); // Should be 100

// 4. Unlock the phone
console.log(smartPhone.unlock("0000")); // Invalid password
console.log(smartPhone.unlock("TimeToLearn882")); // true
```
