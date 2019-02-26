export function getListSites(page) {
  let list = localStorage.getItem(page);
  if (list === null) {
    return [];
  }
  return JSON.parse(list);
}

// ensure response data will always in JSON format or
// return undefined in case error
export async function fetchData(url, type) {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);

  if (type === 'reddit') {
    return response.json().catch(err => undefined);
  }

  const { Parser } = await import('xml2js');
  // parseString does not return value directly
  // see https://github.com/Leonidas-from-XIV/node-xml2js/issues/380
  let _result;
  new Parser({explicitArray: false}).parseString(
    await response.text(), (err, result) => { _result = result;
  });

  return _result;
}
