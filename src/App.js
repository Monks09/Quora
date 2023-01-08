import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Component/Login";
import { login, logout, selectUser } from "./userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return <div className="App">
    {user ? <Login /> : null}
    </div>;
}

export default App;
