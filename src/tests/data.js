export const xmlData = `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:media="http://search.yahoo.com/mrss/"
	>

  <channel>
    <title>Dropbox Developer Blog</title>
    <atom:link href="https://dropboxdeveloperblog.wordpress.com/developers/feed/" rel="self" type="application/rss+xml" />
    <link>https://dropboxdeveloperblog.wordpress.com</link>
    <description></description>
    <lastBuildDate> Wed, 20 Mar 2019 14:03:35 +0000	</lastBuildDate>
    <language>en</language>
    <sy:updatePeriod> hourly	</sy:updatePeriod>
    <sy:updateFrequency> 1	</sy:updateFrequency>
    <generator>http://wordpress.com/</generator>
    <cloud domain='dropboxdeveloperblog.wordpress.com' port='80' path='/?rsscloud=notify' registerProcedure='' protocol='http-post' />
    <image>
      <url>https://s0.wp.com/i/buttonw-com.png</url>
      <title>Dropbox Developer Blog</title>
      <link>https://dropboxdeveloperblog.wordpress.com</link>
    </image>
    <atom:link rel="search" type="application/opensearchdescription+xml" href="https://dropboxdeveloperblog.wordpress.com/osd.xml" title="Dropbox Developer Blog" />
    <atom:link rel='hub' href='https://dropboxdeveloperblog.wordpress.com/?pushpress=hub'/>
	</channel>
</rss>
`

export const parsedRSSData = {
  rss: {
    channel: {
      title: 'RSS',
      link: 'someinfo',
      description: 'someinfo',
      item: [
        {
          title: 'random',
          link: 'random',
          description: 'random'
        }
      ]      
    }
  }
}

export const parsedInvalidRSSData = {
  rss: {
    channel: {
      title: 'RSS',
      link: 'someinfo',
      item: [
        {
          title: 'random',
          link: 'random',
          description: 'random'
        }
      ]      
    }
  }
}
