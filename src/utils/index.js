import getRssItemList, { parseRSSToJSON } from './rss';
import getRedditItemList from './reddit';

export function getListSites(page) {
  let list = localStorage.getItem(page);
  if (list === null) {
    return [];
  }
  return JSON.parse(list);
}

// ensure response data will always in JSON format or
// return undefined in case error
export async function fetchData(url, page) {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

  if (page === 'reddit') {
    return response.json().catch(err => undefined);
  }

  return parseRSSToJSON(await response.text())
}

export function getItemList(site, json) {
  const getItem = {
    rss: getRssItemList,
    reddit: getRedditItemList,
  };
  if (getItem[site]) return getItem[site](json);

  return [];
}
