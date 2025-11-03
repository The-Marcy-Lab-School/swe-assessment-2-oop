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
  - [Framing Questions (for your own thinking)](#framing-questions-for-your-own-thinking)
  - [Deliverables](#deliverables)
  - [Requirements](#requirements)
  - [Evaluation Criteria](#evaluation-criteria)
- [Section 3: Class Implementation](#section-3-class-implementation)
  - [Problem 1: Implement from Scratch - Pokemon](#problem-1-implement-from-scratch---pokemon)
  - [Problem 2: Debug Broken Code - Bank and BankAccount](#problem-2-debug-broken-code---bank-and-bankaccount)
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

Explain how the value of `this` is determined. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```jsx
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
You are tasked with designing a **restaurant ordering system**. The goal is to model how customers and restaurants interact through orders placed in the system.

Your system design should capture the relationships between objects, the properties and methods that describe their behavior, and the data flow that connects them (for example, how an order moves from a customer to a restaurant and then to a driver).

### Framing Questions (for your own thinking)
You do **not** need to answer these directly, but use them to guide your design:
- How does a customer indicate what they want in their order?
- How does a restaurant make their menu of options known to the user?
- How is a total calculated?

### Deliverables

1. **UML Class Diagram**  
   - Must include all classes, properties, methods, and relationships with correct multiplicity notation and association labels.

2. **3–5 minute recorded explanation** covering:
   - Why you chose the specific relationships and class responsibilities.  
   - How your system handles the creation and flow of an order (from when a customer places it to when it’s delivered).  
   - Any trade-offs or design decisions you made.

### Requirements

Your class system _must_ have the following:

1. **Include at least four interacting classes.** 
   * Examples might include (but are not limited to): `Customer`, `Restaurant`, `Order`, etc...
   * You are free to decide which classes are most important to your design.

2. **Model relationships using appropriate multiplicity.**
   * At least one has-many relationship (e.g., a restaurant has many menu items) but you may include more.
   * Show multiplicity using standard UML notation:
     * Exactly one: `1`
     * Zero or one: `0..1`
     * Zero or more: `0..*`
   * Add **association labels** to describe each relationship (e.g., "is created by", "creates many", "has one", etc...).

3. **Include detailed class definitions with:**
   * **Properties** (attributes) and their **data types**.
   * **Methods** (behaviors) and their **named parameters**.
   * Enough detail to show how the classes interact (for example, how an order is placed or how a total is calculated).

4. **Represent your design visually with a UML Class Diagram that includes:**

   * All classes, properties, methods, and relationships.
   * Multiplicity indicators for all relationships.
   * Association labels that describe the purpose of each connection.
   * Clear, uncluttered formatting so another programmer could understand the system from your diagram.


### Evaluation Criteria
Your submission will be assessed on:
- **Clarity and completeness** of the UML diagram.  
- **Correct use of object-oriented principles** (encapsulation, abstraction, relationships).  
- **Accuracy of multiplicity notation** to represent class relationships.  
- **Clarity of association labels** that describe relationships between classes.  
- **Quality of reasoning** in your recorded explanation.  
- **Creativity and realism** in modeling a system that could exist in the real world.

## Section 3: Class Implementation

### Problem 1: Implement from Scratch - Pokemon

**Instructions:** Create a Pokemon class with the following specifications:

**Instance Properties:**

- `name` (String)
- `type` (String)
- `level` (Number, starts at `1`)
- `health` (Number, starts at `100`)

**Instance Methods:**

- `attack(target)` - reduces the target Pokemon's `health` by `10` multiplied by the Pokemon's `level`. Then print `"{name} attacked {target.name}!"`
- `levelUp()` - increases `level` by `1` and increases `health` by `10`. Then print `"{name} leveled up to level {level}!"`
- `isFainted()` - returns `true` if `health` is `0` or below, `false` otherwise

**Static Properties**

- Static property: `allPokemon` (array tracking all created Pokemon)

**Static Methods**

- Static method: `getTotalPokemon()` - returns count of all Pokemon created
- Static method: `findByName(name)` - searches the `allPokemon` array and returns matching Pokemon

**Test your code:**

Create two `Pokemon` instances and demonstrate:

1. One Pokemon attacking another
2. Leveling up a Pokemon
3. Attacking until one faints, then checking if it's fainted

---

### Problem 2: Debug Broken Code - Bank and BankAccount

**Instructions:**: Look at the file `src/bank.js`. It was generated by AI and has several bugs. Fix them!

First, read through the code carefully to understand what the program *should* do. 

Then, comment out the broken code and replace it with your fixed code.

---

### Problem 3: Implement from Scratch - Phone and iPhone

**Instructions:** Create a class hierarchy for phones with inheritance:

**Phone class (parent):**

- Properties: `brand`, `model`, `batteryLevel` (starts at 100), `password` (private, must be a 4-character string)
- Methods:
    - `makeCall(number)` - decreases battery by 5, logs `"Calling {number}..."`
    - `charge()` - sets battery back to 100, logs `"Phone fully charged"`
    - `unlock(password)` - returns true and logs `“Phone unlocked”` if the provided password matches the private password. Otherwise returns false and logs `"Invalid password"`.

**iPhone class (child - inherits from Phone):**

- Additional property: `iOSVersion`
- Override `makeCall(number)` to also log `"Using FaceTime audio"` before calling the parent's `makeCall`
- New method: `faceTime(name)` - decreases `battery` by 2, logs `"Facetiming {name}"`

**Test your code:**

Create an iPhone and demonstrate:

1. Making a call (should show both the FaceTime audio message and regular call message).
2. Using the `faceTime` method.
4. Charging the phone.
3. Checking battery level after each action.
