import React, {useEffect, useState} from "react";

import App from "../components/app";

import "../style/main.scss";

const IndexPage = () => {

    return (
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
};

export default IndexPage;
export const Head = () => <title>Weronika Strzyżewska</title>;
