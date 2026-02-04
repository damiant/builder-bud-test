import { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

// Initialize Builder with your public API key
builder.init('26dd8ae14bc5499f8139f6bb6f3e30ca');

export const BuilderPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [content, setContent] = useState<any>(undefined);

  useEffect(() => {
    async function fetchContent() {
      console.log('Fetching Builder content for the page', window.location.pathname);
      const page = await builder
        .get('page', {
          url: window.location.pathname,
        })
        .promise();

      setContent(page);
    }
    fetchContent();
  }, []);

  return (
    <>
      {/* Render the Builder content */}
      <BuilderComponent model="page" content={content} />
    </>
  );
};
