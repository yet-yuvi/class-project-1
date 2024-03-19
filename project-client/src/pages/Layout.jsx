// import { CartProvider } from "../contexts";
import { Navbar } from "../components";
import { MainArea } from "../components";

export const Layout = () => {
  return (
    <div className="App">
      {/* <CartProvider> */}
        <Navbar />
        <MainArea />
      {/* </CartProvider> */}
    </div>
  );
};
