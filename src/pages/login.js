import { signInWithGoogle, logout } from "@/lib/auth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Sign in with Google
      </button>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
