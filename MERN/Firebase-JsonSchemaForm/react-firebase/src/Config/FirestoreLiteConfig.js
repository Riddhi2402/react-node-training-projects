import { Database } from 'firebase-firestore-lite';
import Auth from 'firebase-auth-lite';

export const auth = new Auth({
  apiKey: 'AIzaSyCZkULN-XDWnTXuG70NfFIGrIN053gAaHc',
});

export const db = new Database({ projectId: 'user-crud-10fa6', auth });
