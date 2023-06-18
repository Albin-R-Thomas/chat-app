import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "../../Styles/SideDrawer.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    left: "0px",
    top: "0px",
    height: "100%",
    width: "20%",
  },
};

const SideDrawer = () => {
  const [isSideDrawerOpen, setisSideDrawerOpen] = useState(false);
  const openModal = (e) => {
    setisSideDrawerOpen(true);
  };
  const closeModal = (e) => {
    setisSideDrawerOpen(false);
  };
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div
            className="search-button"
            data-tooltip-id="user-search-tooltip"
            data-tooltip-content="Search users to Chat"
            onClick={openModal}
          >
            <ion-icon name="search"></ion-icon>
            <div>Search User</div>
          </div>
          <Modal
            isOpen={isSideDrawerOpen}
            style={customStyles}
            contentLabel="users-modal"
          >
            <div className="modal-header-container">
              <div className="modal-header">Search User</div>
              <ion-icon
                name="close-circle-outline"
                id="close-modal-circle"
                onClick={closeModal}
              ></ion-icon>
            </div>
            <hr />
            <div className="searchContainer">
              <input
                type="text"
                name="search-user"
                className="search-user"
                placeholder="  Enter the name of the user  "
              />
              <button className="go">Go</button>
            </div>
          </Modal>
          <Tooltip id="user-search-tooltip" />
          <div className="header-text">Chat App</div>
          <div className="header-right">
            <ion-icon id="notifications-img"></ion-icon>
            <ion-icon name="person-circle-outline" id="ion-profile"></ion-icon>
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
