import firebase from 'firebase';
import config from '../../config';

firebase.initializeApp(config.db);

export const db = firebase.database();