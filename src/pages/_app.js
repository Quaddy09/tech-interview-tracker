import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";  // Use relative path

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
