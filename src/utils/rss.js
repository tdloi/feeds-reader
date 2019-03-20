import { Parser } from 'xml2js'

export default function getRssItemList(json) {
  return json.rss.channel.item;
}

export function isValidRSS(json) {
  // Check channel elements
  const requiredChannelElements = ['title', 'link', 'description', 'item'];
  const channel = ((json || {}).rss || {}).channel || {}
  const filteredChannelElements = Object.keys(channel).filter(
    key => requiredChannelElements.includes(key)
  )
  if (filteredChannelElements.length !== requiredChannelElements.length) {
    return false
  }

  // based on specifications, one of title or description must be present
  // but because we do not show feeds content, we need to check if link elements
  // are existed too
  const items = channel.item.reduce( (arr, item) => {
    if ((item.channel === undefined && item.title === undefined)
        || item.link === undefined) {
      return arr
    }
    return arr.concat(item)
  }, [])

  return items.length === channel.item.length;
}


export function parseRSSToJSON(xml) {
  // parseString does not return value directly
  // see https://github.com/Leonidas-from-XIV/node-xml2js/issues/380
  let _result;
  new Parser({ explicitArray: false }).parseString(
    xml,
    (err, result) => { _result = result; }
  );

  return _result;
}
