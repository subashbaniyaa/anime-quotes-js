import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quotesPath = path.join(__dirname, "quotes.json");

let cachedQuotes = null;

async function loadQuotes() {
  if (cachedQuotes) return cachedQuotes;

  try {
    const data = await fs.readFile(quotesPath, "utf8");
    const quotes = JSON.parse(data);

    cachedQuotes = quotes.filter(
      q => q && typeof q.quote === "string" && typeof q.character === "string" && typeof q.anime === "string"
    );

    if (cachedQuotes.length === 0) {
      throw new Error("No valid quotes found in JSON");
    }

    return cachedQuotes;
  } catch (err) {
    throw new Error("Failed to load quotes: " + err.message);
  }
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get a random anime quote
 * @returns {Promise<{quote: string, character: string, anime: string}>}
 */
export async function getRandomQuote() {
  const quotes = await loadQuotes();
  return getRandomElement(quotes);
}

/**
 * Get all anime quotes
 * @returns {Promise<Array<{quote: string, character: string, anime: string}>>}
 */
export async function getAllQuotes() {
  return loadQuotes();
}