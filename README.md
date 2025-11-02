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
A: Yes, but not for everything. The code that you write and the short response answers you provide must be 100% yours. You cannot provide any AI tool with your code or writing to review and you cannot provide any AI tool with a problem from the assessment to solve. However, you can use AI to support your learning and understanding of key concepts that are mentioned in the assessment. For example, if the assessment mentions scope, you can use Gemini or ChatGPT to help you understand that concept better but you cannot paste the question prompt into these tools to get an answer.

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

Encapsulation is an essential principle of object-oriented programming. 

In your own words, explain what the core aspects of encapsulation are and give one reason why it's useful.

### Question 2: this Keyword

Explain how the value of `this` is determined in various contexts and why it is useful.

Use the code snippet below to support your response:

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

**Prompt:** You're given a basic School Management System with two classes:

- `School` (properties: `name`, `address`, `students`, and methods: `addStudent()`)
- `Student` (properties: `name`, `grade`, `studentId`)

**Your task:** Extend this system to handle:

1. Teachers who work at the school and teach multiple courses.
2. Courses that have one teacher and many enrolled students.
4. The ability to track student grades in each course they are enrolled in.

**Deliverables:**

- UML diagram showing the original classes PLUS your new classes and relationships (created using draw.io, Google Drawings, or a similar diagraming tool)
  - For each relationship, label it as "one to one", "one to many", or "many to many"
  - For each class, include properties with data types and methods with named parameters
- Recorded video (~5 minutes) explaining:
    - What new classes you added and why
    - How you connected them to the existing system
    - One limitation or challenge in your design

---

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
    - `unlock(password)` - returns `“Phone unlocked”` if the provided password matches the private password

**iPhone class (child - inherits from Phone):**

- Additional property: `iOSVersion`
- Override `makeCall(number)` to also log `"Using FaceTime audio"` before calling the parent's `makeCall`
- New method: `faceTime(name)` - decreases `battery` by 2, logs `"Facetiming {name}"`

**Test your code:**

Create an iPhone and demonstrate:

1. Making a call (should show both the FaceTime audio message and regular call message).
2. Using the `faceTime` method.
3. Checking battery level after both actions.
4. Charging the phone.
