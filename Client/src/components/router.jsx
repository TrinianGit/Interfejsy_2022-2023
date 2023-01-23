import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notfound";
import SearchResults from "../pages/searchresults"
import Loading from "../pages/loadingtrains"
import BadReq from "../pages/400badreq"
import Buyinput from "../pages/buyinput"
import Buyinfo from "../pages/buyinfo"
import Payment from "../pages/payment"
import PaymentSuccess from "../pages/paymentsuccess"
import Compare from "../pages/comparingtrains"
import CompareResults from "../pages/comparepage"
import LoginPage from "../pages/login"
import UserPage from "../pages/userpage"
import UserData from "../pages/userdata"
import UserEdit from "../pages/useredit"
import Logout from "../pages/logout"
import TicketHistory from "../pages/tickethistory"
import ReturnTicket from "../pages/returnticket"
import ReturnConfirm from "../pages/returnconfirm"
import ForgotPassword from "../pages/forgotpassword"
import EmailSend from "../pages/emailsend"
import EmailLoading from '../pages/emailloading'
import NewPassword from "../pages/newpassword"
import PasswordChanged from "../pages/passwordchanged"
import AdvancedSearch from '../pages/advancedsearch'
import RouteMenu from "../pages/routemenu"
import RouteShow from "../pages/routeshow"
import LoadingMap from "../pages/maploading"
import MapShow from "../pages/mapshow"
import RouteLoading from "../pages/routeloading"
//Angielska

import HomeEn from "../pages/en/home";
import ContactEn from "../pages/en/contact";
import NotFoundEn from "../pages/en/notfound";
import SearchResultsEn from "../pages/en/searchresults"
import LoadingEn from "../pages/en/loadingtrains"
import BadReqEn from "../pages/en/400badreq"
import BuyinputEn from "../pages/en/buyinput"
import BuyinfoEn from "../pages/en/buyinfo"
import PaymentEn from "../pages/en/payment"
import PaymentSuccessEn from "../pages/en/paymentsuccess"
import CompareEn from "../pages/en/comparingtrains"
import CompareResultsEn from "../pages/en/comparepage"
import LoginPageEn from "../pages/en/login"
import UserPageEn from "../pages/en/userpage"
import UserDataEn from "../pages/en/userdata"
import UserEditEn from "../pages/en/useredit"
import LogoutEn from "../pages/en/logout"
import TicketHistoryEn from "../pages/en/tickethistory"
import ReturnTicketEn from "../pages/en/returnticket"
import ReturnConfirmEn from "../pages/en/returnconfirm"
import ForgotPasswordEn from "../pages/en/forgotpassword"
import EmailSendEn from "../pages/en/emailsend"
import EmailLoadingEn from '../pages/en/emailloading'
import NewPasswordEn from "../pages/en/newpassword"
import PasswordChangedEn from "../pages/en/passwordchanged"
import AdvancedSearchEn from '../pages/en/advancedsearch'
import RouteMenuEn from "../pages/en/routemenu"
import RouteShowEn from "../pages/en/routeshow"
import LoadingMapEn from "../pages/en/maploading"
import MapShowEn from "../pages/en/mapshow"
import RouteLoadingEn from "../pages/en/routeloading"

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path='/AdvancedSearch' component={AdvancedSearch} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/Logout" component={Logout} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
      <Route exact path="/EmailSend" component={EmailSend} />
      <Route exact path="/EmailLoading" component={EmailLoading} />
      <Route exact path="/NewPassword" component={NewPassword} />
      <Route exact path="/RouteMenu" component={RouteMenu} />
      <Route exact path="/RouteShow" component={RouteShow} />
      <Route exact path="/RouteLoading" component={RouteLoading} />
      <Route exact path="/PasswordChanged" component={PasswordChanged} />
      <Route exact path="/UserAccount" component={UserPage} />
      <Route exact path="/UserData" component={UserData} />
      <Route exact path="/UserEdit" component={UserEdit} />
      <Route exact path="/SearchResults" component={SearchResults} />
      <Route exact path="/MapLoading" component={LoadingMap} />
      <Route exact path="/MapShow" component={MapShow} />
      <Route exact path="/LoadingTrains" component={Loading} />
      <Route exact path="/TicketHistory" component={TicketHistory} />
      <Route exact path="/ReturnTicket" component={ReturnTicket} />
      <Route exact path="/ReturnConfirm" component={ReturnConfirm} />
      <Route exact path="/CompareTrains" component={Compare} />
      <Route exact path="/CompareResults" component={CompareResults} />
      <Route exact path="/BuyInput" component={Buyinput} />
      <Route exact path='/BuyInfo' component={Buyinfo} />
      <Route exact path='/Payment' component={Payment} />
      <Route exact path='/PaymentSuccess' component={PaymentSuccess} />
      <Route exact path='/400badrequest' component={BadReq} />
    
      {/* Angielska wersja  */} 
    
      <Route exact path="/en/" component={HomeEn} />
      <Route exact path="/en/Contact" component={ContactEn} />
      <Route exact path='/en/AdvancedSearch' component={AdvancedSearchEn} />
      <Route exact path="/en/Login" component={LoginPageEn} />
      <Route exact path="/en/Logout" component={LogoutEn} />
      <Route exact path="/en/ForgotPassword" component={ForgotPasswordEn} />
      <Route exact path="/en/EmailSend" component={EmailSendEn} />
      <Route exact path="/en/EmailLoading" component={EmailLoadingEn} />
      <Route exact path="/en/NewPassword" component={NewPasswordEn} />
      <Route exact path="/en/RouteMenu" component={RouteMenuEn} />
      <Route exact path="/en/RouteShow" component={RouteShowEn} />
      <Route exact path="/en/RouteLoading" component={RouteLoadingEn} />
      <Route exact path="/en/PasswordChanged" component={PasswordChangedEn} />
      <Route exact path="/en/UserAccount" component={UserPageEn} />
      <Route exact path="/en/UserData" component={UserDataEn} />
      <Route exact path="/en/UserEdit" component={UserEditEn} />
      <Route exact path="/en/SearchResults" component={SearchResultsEn} />
      <Route exact path="/en/MapLoading" component={LoadingMapEn} />
      <Route exact path="/en/MapShow" component={MapShowEn} />
      <Route exact path="/en/LoadingTrains" component={LoadingEn} />
      <Route exact path="/en/TicketHistory" component={TicketHistoryEn} />
      <Route exact path="/en/ReturnTicket" component={ReturnTicketEn} />
      <Route exact path="/en/ReturnConfirm" component={ReturnConfirmEn} />
      <Route exact path="/en/CompareTrains" component={CompareEn} />
      <Route exact path="/en/CompareResults" component={CompareResultsEn} />
      <Route exact path="/en/BuyInput" component={BuyinputEn} />
      <Route exact path='/en/BuyInfo' component={BuyinfoEn} />
      <Route exact path='/en/Payment' component={PaymentEn} />
      <Route exact path='/en/PaymentSuccess' component={PaymentSuccessEn} />
      <Route exact path='/en/400badrequest' component={BadReqEn} />
    
    
      <Route component={NotFound} />
    </Switch>
);
