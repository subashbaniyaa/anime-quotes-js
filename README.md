# anime-quotes-js 
![npm](https://img.shields.io/npm/v/anime-quotes-js.svg)

*A simple Node.js module to fetch **anime quotes** from a JSON file.*

---

**Installation**

```bash
npm install anime-quotes-js
```


**Or using locally**

```bash
git clone https://github.com/subashbaniyaa/anime-quotes-js.git
```

**Import the module**

```js
import { getRandomQuote, getAllQuotes } from 'anime-quotes-js';
```

**Get a random quote**

```js
const quote = await getRandomQuote();
console.log(quote);
```

**Get all quotes**

```js
const quotes = await getAllQuotes();
console.log(quotes);
```
