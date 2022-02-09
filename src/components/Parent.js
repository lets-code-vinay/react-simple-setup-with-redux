import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_GET } from "../Config/Api";
import { userDetail } from "../Redux/usersType/userType.action";
import { SET_USER_DETAIL } from "../Redux/usersType/userType.types";
import Header from "./Header";
import Profile from "./Profile/index2";

function Parent(props) {
  /**
   * Dispatch to call action.
   */
  const dispatch = useDispatch();
  /*
   *
   *Selector to get Data from Store
   *-----Reading values from Store----
   */
  const userDetailFromStore = useSelector((state) => state);
  console.log(userDetailFromStore);

  // State
  const [posts, setPost] = useState(
    userDetailFromStore?.userType?.userData?.data
  );
  const [isListEnabled, getList] = useState(false);

  React.useEffect(() => {
    // userAction(userAction());
    axios
      .get(URL_GET)
      .then((response) => {
        dispatch(userDetail(SET_USER_DETAIL, response?.data));
        setPost(response?.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  /**
   * To enable details of user by clicking button
   */
  const getDetails = () => {
    getList(true);
  };

  /**
   * Receiving from Child to Parent to handle close the lists
   */
  const onClose = () => {
    getList(false);
  };

  return (
    <div className="Parent">
      <h1>ABC IT Solutions</h1>

      <Header desc="List of Office Employees" />

      <button onClick={getDetails}>Get List </button>

      <Profile
        isListEnabled={isListEnabled}
        clientData={posts}
        onClose={onClose}
      />
    </div>
  );
}

export default Parent;
