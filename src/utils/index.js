export function getListSites(page) {
  let list = localStorage.getItem(page);
  if (list === null) {
    return [];
  }
  return JSON.parse(list);
}
