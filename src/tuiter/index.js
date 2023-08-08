import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import WhoToFollowList from "./who-to-follow-list";
import authReducer from "./reducers/auth-reducer";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
  { reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer } });


function Tuiter() {
  return (
    <Provider store={store}>
      <Nav />
      <div className="row">
        <div className="col-2">
          <NavigationSidebar />
        </div>
        <div className="col-7">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/notifications" element={<BookmarksScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;