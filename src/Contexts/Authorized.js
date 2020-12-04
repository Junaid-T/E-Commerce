import React, { useEffect, createContext, useState } from "react";

export const AuthorizedContext = createContext();

export const AuthorizedProvider = (props) => {
  const [authorized, setAuthorized] = useState(true);
  const [popup, setPopup] = useState(false);

  return (
    <AuthorizedContext.Provider
      value={[authorized, setAuthorized, popup, setPopup]}
    >
      {props.children}
    </AuthorizedContext.Provider>
  );
};
