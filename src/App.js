import './assets/css/App.css';
import { AuthProvider } from "./auth/auth.context";
import Header from './components/Header/Header';
import Main from "./components/Main";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Main />
      </AuthProvider>
    </>
  );
}

export default App;
