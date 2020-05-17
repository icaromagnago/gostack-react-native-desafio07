import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.tron.log(navigationRef);
  navigationRef.current?.navigate(name, params);
}
