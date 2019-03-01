import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';
import Loading from './Loading';

export default function Article({ lists, isLoading }) {
  return (
    <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          {lists.map(article => (
            <Card
              key={article.link}
              component="article"
              style={{ margin: '0.5rem' }}
            >
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
      )}
    </React.Fragment>
  );
}
