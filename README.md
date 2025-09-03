# anime-quotes-js

*A simple Node.js module to fetch **anime quotes** from a JSON file.*
---

**Installation**

```bash
npm install anime-quotes-js
```

---

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
---
