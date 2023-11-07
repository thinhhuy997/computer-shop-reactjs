import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://docker-computer-shop-drf.onrender.com/api/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      // decode jwt-token
      setUser(jwtDecode(data.access));

      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      alert("Something went wrong");
    }
  };

  const [category, setCategory] = useState("SELL");

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let updateToken = async () => {
    console.log("updated token");
    let response = await fetch(
      "https://docker-computer-shop-drf.onrender.com/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    // sau khi cập nhật xong token với lần đầu quay lại page thì cập nhật lại loading = false
    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user,
    loginUser,
    authTokens,
    setAuthTokens,
    logoutUser,
    category,
    setCategory,
  };

  // refresh token after 4 minutes
  useEffect(() => {
    // khi user lần đầu quay lại load page thì cập nhật lại access token
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {/* nếu loading = true thì không được render children */}
      {/* khi loading = false tương đương với việc đã đã cập nhật access token mới thì mới cho render children*/}
      {/* {loading ? null : children} */}

      {children}
    </AuthContext.Provider>
  );
};
