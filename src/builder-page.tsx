import { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/react';

// Initialize Builder with your public API key
builder.init('26dd8ae14bc5499f8139f6bb6f3e30ca');

export const BuilderPage = () => {
  const [content, setContent] = useState<BuilderContent | null>(null);

  useEffect(() => {
    async function fetchContent() {
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
