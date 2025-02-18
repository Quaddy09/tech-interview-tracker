import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "@/config/firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
