const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./todo-list-d8eac-firebase-adminsdk-r20ro-db4e4e107b.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db