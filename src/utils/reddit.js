export default function getRedditItemList(json) {
  return json.data.children.map(
    child => ({
      title: child.data.title,
      link: child.data.url,
      description: child.data.selftext,
      pubDate: UTCEpocToDateString(child.data.created_utc),
    }),
    []
  );
}

function UTCEpocToDateString(epoc) {
  const d = new Date(0);
  d.setUTCSeconds(epoc);
  return d.toDateString();
}
