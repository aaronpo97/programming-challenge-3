# Anagram Calculator

## Overview

The Anagram Calculator is a versatile program that efficiently identifies and groups anagrams from a word list. It retrieves the word list from [https://github.com/dwyl/english-words/raw/master/words_alpha.txt](https://github.com/dwyl/english-words/raw/master/words_alpha.txt) and outputs sets of words that share the same letters.

## Example

Consider the following word list:

```js
[
   'arc',
   'car',
   'far',
   'tar',
   'listen',
   'silent',
   'enlist',
   'debit',
   'bited',
   'guide',
   'bored',
   'robed',
];
```

The program yields the following output:

```js
[
   ['arc', 'car'],
   ['listen', 'silent', 'enlist'],
   ['debit', 'bited'],
   ['bored', 'robed'],
];
```

### Explanation

-  The words 'arc', 'car', and 'far' are identified as anagrams and grouped together.
-  Another group comprises 'listen', 'silent', and 'enlist'.
-  Similarly, 'debit' and 'bited' form an anagram group, as do 'bored' and 'robed'.
-  Words without any anagrams are excluded from the result.

## How to Run the Program

Follow these steps to execute the program:

1. **Install Node (v20):**

   -  Ensure that you have Node (v20), the current LTS version, installed.

2. **Install Dependencies:**

   -  Run `npm install` to install Typescript and other required dependencies.

3. **Run the Program:**
   -  Execute `npm start` to initiate the program.
