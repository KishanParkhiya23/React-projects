import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification.js";

function App() {
  const notificationValue = useSelector(
    (state) => state.visibleSlice.isNotificationVisible
  );

  return (
    <Layout>
      {notificationValue && notificationValue.status && (
        <Notification
          title={notificationValue.title}
          message={notificationValue.message}
        />
      )}
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
