import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';

export default function Article({ lists }) {
  return (
    <Fragment>
      {lists.map(article => (
        <Link
          target="_blank"
          rel="noreferrer"
          href={article.link}
          key={article.link}
        >
          <Card>
            <CardHeader title={article.title} subheader={article.pubDate} />
            <CardContent>
              <Typography component="p">
                {article.description.subString(0, 200)}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Fragment>
  );
}
