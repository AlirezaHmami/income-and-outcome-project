import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AppContextProvider from "./Context/AppContext";
export default function App() {

  return (
    <AppContextProvider>
    <Header />
    <Main />
    <Footer />
    </AppContextProvider>
  )
}