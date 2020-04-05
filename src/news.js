const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6e3019eb1c2f4cdbbde62d0d0ef05d48";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}