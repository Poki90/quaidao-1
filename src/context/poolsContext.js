import React, { useState } from 'react';
import { DataContext } from 'config';
import { debugLog } from 'utils/helpers';

function DataContextProvider(props) {
  const [data, setData] = useState(['get','data']);

  const value = React.useMemo(() => [data], [data]);
  debugLog(value);
  return <DataContext.Provider value={value} {...props} />;
}
export default DataContextProvider;
