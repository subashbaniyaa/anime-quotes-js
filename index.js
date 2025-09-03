import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const quotesPath = path.join(__dirname, "quotes.json");

async function loadQuotes() {
  try {
    const data = await fs.readFile(quotesPath, "utf8");
    return JSON.parse(data);
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
  if (!quotes || quotes.length === 0) {
    throw new Error("No quotes available");
  }
  return getRandomElement(quotes);
}

/**
 * Get all anime quotes
 * @returns {Promise<Array>}
 */
export async function getAllQuotes() {
  return loadQuotes();
}
