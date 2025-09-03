# anime-quotes-js

A simple Node.js module to fetch **anime quotes** from a JSON file.
---

## Features

* Get a **random anime quote**
* Get **all anime quotes**

---

## Installation

```bash
npm install anime-quotes-js
```

Or if using locally:

```bash
git clone https://github.com/subashbaniyaa/anime-quotes-js.git
cd your-repo
npm install
```

---

## Usage

### Import the module

```js
import { getRandomQuote, getAllQuotes } from './animeQuotes.js';
```

### Get a random quote

```js
const quote = await getRandomQuote();
console.log(quote);
```

**Example output:**

```json
{
  "quote": "I’ll take a potato chip… and eat it!",
  "character": "Light Yagami",
  "anime": "Death Note"
}
```

### Get all quotes

```js
const quotes = await getAllQuotes();
console.log(quotes);
```

**Example output:**

```json
[
  {
    "quote": "People’s lives don’t end when they die, it ends when they lose faith.",
    "character": "Itachi Uchiha",
    "anime": "Naruto"
  },
  {
    "quote": "Power comes in response to a need, not a desire.",
    "character": "Goku",
    "anime": "Dragon Ball Z"
  },
  {
    "quote": "I’ll take a potato chip… and eat it!",
    "character": "Light Yagami",
    "anime": "Death Note"
  }
]
```

---

## File Structure

```
anime-quotes/
├─ animeQuotes.js      # Module with getRandomQuote and getAllQuotes
├─ quotes.json         # JSON file containing all quotes
├─ package.json
└─ README.md
```

---

## Example `quotes.json`

```json
[
  {
    "quote": "People’s lives don’t end when they die, it ends when they lose faith.",
    "character": "Itachi Uchiha",
    "anime": "Naruto"
  },
  {
    "quote": "Power comes in response to a need, not a desire.",
    "character": "Goku",
    "anime": "Dragon Ball Z"
  },
  {
    "quote": "I’ll take a potato chip… and eat it!",
    "character": "Light Yagami",
    "anime": "Death Note"
  }
]
```

---

## Notes

* The module caches the JSON file in memory, so reading quotes is fast after the first load.
* Only quotes with **`quote`**, **`character`**, and **`anime`** fields are considered valid.

---

## License

MIT © Your Name
