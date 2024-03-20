// import { CartProvider } from "../contexts";
import { Sidebar } from "../components";
import { MainArea } from "../components";

export const Layout = () => {
  return (
    <div className="App">
      {/* <CartProvider> */}
        <Sidebar />
        <MainArea />
      {/* </CartProvider> */}
    </div>
  );
};
