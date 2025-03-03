import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./routes/appRoutes";
import api from "./service/api";

function App() {
  const MODE = import.meta.env.MODE;
  console.log(MODE);
  const isDev = MODE === "development";
  const mockUserInfo = {
    id: 569980646,
    first_name: "Sopheak",
    last_name: "Men",
    language_code: "en",
    allows_write_to_pm: true,
    photo_url:
      "https://t.me/i/userpic/320/QKA6yq3RmRiBS_p4XCDgcr8Df6dMFrxLvLJhz9laA8U.svg",
  };

  const initData = isDev ? "initData" : window.Telegram.WebApp.initData;
  const userInfo = isDev
    ? mockUserInfo
    : window.Telegram.WebApp.initDataUnsafe?.user;
  console.log("userInfo:", userInfo);

  useEffect(() => {
    const login = async () => {
      await handleSendRequest();
    };
    login();
  }, []);

  const handleSendRequest = async () => {
    if (window.Telegram?.WebApp) {
      try {
        await api
          .signin({ initData, userInfo })
          .then((data) => {
            console.log("Backend response:", data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Telegram WebApp not available.");
    }
  };

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;