import "@/styles/globals.css";
import { store } from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import logo from "@/assets/images/logo.png";
import NavigationBar from "@/components/NavigationBar";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <NavigationBar
        logoSrc={logo.src}
        onSearch={(value) => dispatch(setQuery(value))}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
