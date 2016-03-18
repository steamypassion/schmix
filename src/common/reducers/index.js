import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { delayReducer as delay } from '../components/effects/Delay/Delay.reducers';

import landingPage from '../../containers/LandingPage/LandingPage.reducers.js';
import tracks from '../../containers/Mixer/reducers.js';

const rootReducer = combineReducers({
  router,
  delay,
  landingPage,
  tracks
});

export default rootReducer;
