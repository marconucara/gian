import Error from 'next/error';

import { sanityLivePreviewEnabled } from '../hooks/useSanityLivePreview';
import SanityRouter from './[[...slugArray]]';

// this is a fake 404 to handle client side only routes, mostly for live-preview
// if it is not a live preview env we should load real 404 or let sanityRouter do that

const Custom404: React.VFC = () => {
  return (
    <>
      {typeof window !== 'undefined' && sanityLivePreviewEnabled() ? (
        <SanityRouter
          // we use window.location instead of router because router get always /404 as pathname
          slugArray={window.location.pathname.replace(/^\//, '').split('/')}
        />
      ) : (
        <Error statusCode={404} />
      )}
    </>
  );
};

export default Custom404;
