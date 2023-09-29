import React, {useEffect, useState} from "react";

import App from "../components/app";

import "../style/main.scss";
import Loader from "../components/loader";

const IndexPage = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 000);
    }, []);


    return (
    <React.StrictMode>
        <div>
            {loading ? (
                <Loader />
            ) : (
                <App />
            )}
        </div>

    </React.StrictMode>
  );
};

export default IndexPage;
export const Head = () => <title>Weronika Strzyżewska</title>;
