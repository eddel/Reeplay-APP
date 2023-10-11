import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import AboutUS from "../screens/AboutUs/AboutUs";
import ActorProfile from "../screens/ActorProfile/ActorProfile";
import Auth from "../screens/Auth/Auth";
import Channels from "../screens/Channels/Channels";
import DashboardAccount from "../screens/Dashboard-Account/DashboardAccount";
import DashboardAccountActive from "../screens/Dashboard-AccountActive/DashboardAccountActive";
import TopupScreen from "../screens/Dashboard-AccountActive/TopupScreen";
import DashboardDownload from "../screens/Dashboard-Download/DashboardDownload";
import DashboardSettings from "../screens/Dashboard-Settings/DashboardSettings";
import NotificationSetting from "../screens/Dashboard-Settings/NotificationSettings";
import DashboardWatchlist from "../screens/Dashboard-Watchlist/DashboardWatchlist";
import Dashboard from "../screens/Dashboard/Dashboard";
import Events from "../screens/Events/Events";
import Gift from "../screens/Gift/Gift";
import GiftRedeem from "../screens/Gift/GiftRedeem";
import Home from "../screens/Home/Home";
import InterestsScreen from "../screens/Interests/InterestsScreen";
import Library from "../screens/LIBRARY/Library";
import Languages from "../screens/Language/Languages";
import Live from "../screens/Live/Live";
import NewsPlayer from "../screens/Live/NewsPlayer";
import Login from "../screens/Login/Login";
import MoviewPreview from "../screens/Movie-Preview/Moviepreview";
import MusicVideoPreview from "../screens/Music-VideoPreview/MusicVideoPreview";
import Notifications from "../screens/Notifications/Notifications";
import OnBoarding from "../screens/OnBoarding";
import OnBoarding2 from "../screens/OnBoarding2/OnBoarding2";
import OnBoarding3 from "../screens/OnBoarding3/OnBoarding3";
import PasswordReset from "../screens/PasswordReset/PasswordReset";
import Pin from "../screens/Pin/Pin";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import QuickLog from "../screens/QuickLog/QuickLog";
import Register from "../screens/Register/Register";
import Search from "../screens/Search/Search";
import SeriesPreview from "../screens/Series-Preview/SeriesPreview";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import Suggestions from "../screens/Suggestions/Suggestions";
import TVShows from "../screens/TVShows/TVShows";
import TermsConditions from "../screens/TermsConditions/TermsConditions";
import FromMovie from "../screens/TopupSummary/ForMovie";
import ReviewSumary from "../screens/TopupSummary/ReviewSumary";
import TopupSummary from "../screens/TopupSummary/TopupSummary";
import Upcoming from "../screens/Up-Coming/Upcoming";
import VerifyEmail from "../screens/VerifyEmail/VerifyEmail";
import FaceTouchId from "../screens/faceTouchID";
import VideoScreen from "../components/videoPlayer";
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer theme={{ colors: { background: "#000" } }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="QuickLog" component={QuickLog} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen
          name="InterestsScreen"
          component={InterestsScreen}
        ></Stack.Screen>
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ActorProfile" component={ActorProfile} />
        <Stack.Screen name="Live" component={Live} />
        <Stack.Screen name="NewsPlayer" component={NewsPlayer} />

        <Stack.Screen name="SeriesPreview" component={SeriesPreview} />
        <Stack.Screen name="MoviewPreview" component={MoviewPreview} />
        <Stack.Screen name="FromMovie" component={FromMovie}></Stack.Screen>
        <Stack.Screen name="MusicVideoPreview" component={MusicVideoPreview} />
        <Stack.Screen name="Channels" component={Channels} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Upcoming" component={Upcoming} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Gift" component={Gift}></Stack.Screen>
        <Stack.Screen name="GiftRedeem" component={GiftRedeem}></Stack.Screen>
        <Stack.Screen
          name="Notifications"
          component={Notifications}
        ></Stack.Screen>
        <Stack.Screen name="DashboardAccount" component={DashboardAccount} />
        <Stack.Screen name="DashboardSettings" component={DashboardSettings} />
        <Stack.Screen name="AboutUs" component={AboutUS}></Stack.Screen>
        <Stack.Screen name="Languages" component={Languages}></Stack.Screen>
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSetting}
        ></Stack.Screen>
        <Stack.Screen name="DashboardDownload" component={DashboardDownload} />
        <Stack.Screen
          name="DashboardWatchlist"
          component={DashboardWatchlist}
        />
        <Stack.Screen
          name="DashboardAccountActive"
          component={DashboardAccountActive}
        />
        <Stack.Screen name="TopupScreen" component={TopupScreen} />
        <Stack.Screen name="TopupSummary" component={TopupSummary} />
        <Stack.Screen name="ReviewSumary" component={ReviewSumary} />
        <Stack.Screen name="Suggestions" component={Suggestions} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="TVShows" component={TVShows} />
        <Stack.Screen name="Pin" component={Pin} />
        <Stack.Screen name="FaceTouchId" component={FaceTouchId} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
