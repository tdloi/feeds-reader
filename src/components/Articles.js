import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';

export default function Article({ lists }) {
  return (
    <section>
      {lists.map(article => (
        <Card key={article.link}>
          <Link target="_blank" rel="noreferrer" href={article.link}>
            <CardHeader title={article.title} subheader={article.pubDate} />
          </Link>
          <CardContent>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{ __html: article.description }}
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
