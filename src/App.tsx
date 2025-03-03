import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./routes/appRoutes";
import api from "./service/api";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "./store/slices/authSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

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
      try {
        const response = (await api.signin({ initData, userInfo })) as {
          message: string;
          token: string;
        };
        console.log("Backend response:", response);

        dispatch(
          setAuthData({
            initData: initData ?? "",
            userInfo,
            token: response.token,
          })
        );
      } catch (error) {
        console.error("Login Error:", error);
      }
    };

    login();
  }, [dispatch]);

  return (
    <>
      {token && <RouterProvider router={appRouter} />}
      {!token && <div>Loading...</div>}
    </>
  );
}

export default App;
