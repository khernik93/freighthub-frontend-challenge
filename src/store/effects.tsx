import { combineEpics } from 'redux-observable';

import homeEffects from '../components/Home/store/effects';
import detailEffects from '../components/Details/store/effects';

const effects = combineEpics(...[...homeEffects, ...detailEffects]);

export default effects;
