import * as React from 'react';

import aspida from '@aspida/fetch';
import api from '../api/$api';

const client = api(aspida());

// /apiより後ろのみを考慮するためにclient.apiを保持
const context = React.createContext(client.api);

export const useApiClient = () => React.useContext(context);
