import { getEnvironment } from "@adapters/getEnvironment.adapter";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const {
	VITE_API_KEY_FIREBASE,
	VITE_AUTH_DOMAIN,
	VITE_PROJECT_ID,
	VITE_STORAGE_BUCKET,
	VITE_MESSAGING_SENDER_ID,
	VITE_APP_ID,
} = getEnvironment();

const firebaseConfig = {
	apiKey: VITE_API_KEY_FIREBASE,

	authDomain: VITE_AUTH_DOMAIN,

	projectId: VITE_PROJECT_ID,

	storageBucket: VITE_STORAGE_BUCKET,

	messagingSenderId: VITE_MESSAGING_SENDER_ID,

	appId: VITE_APP_ID,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseGetAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
