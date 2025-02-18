import Head from 'next/head'
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}