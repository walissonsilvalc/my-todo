import ReactModal from "react-modal";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

import defaultTheme from "./styles/themes/theme";
import lightTheme from "./styles/themes/light";
import { useState } from "react";
import { Home } from "./pages/Home";
import { TodoListProvider } from "./hooks/TodoListContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement("#root");

function App() {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);

  return (
    <ThemeProvider theme={isDefaultTheme ? defaultTheme : lightTheme}>
      <TodoListProvider>
        <Header />
        <Home />
      </TodoListProvider>

      {/* <button onClick={() => setIsDefaultTheme(!isDefaultTheme)}>
        Change theme
      </button> */}
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
