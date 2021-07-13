import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import CheckoutPage from "./pages/checkout/checkoutpage.component";

import {
  auth,
  createUserProfileDocument
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/users.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log(process.env.NODE_ENV);
    const { setCurrentUser } = this.props; // pulls setCurrentUser from the props provided by the connect HOC
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth); // takes userAuth  as the payload and sets it as the currentUser
        
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // pulls the user from state(root reducer)
  // currentUser: user.currentUser,
  // ** always use createStructuredSelector for ur selectors
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  // allows us to use the key as a props for the app component
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
