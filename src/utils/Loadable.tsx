import { Suspense, type ElementType } from 'react';

// Ini helper function Loadable
const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<div className="p-10">Loading page...</div>}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;