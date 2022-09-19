import React, { useState } from "react";
//import FullPageLoader from "components/FullPageLoader";
import FullPageLoader from "../components/Admin/FullPageLoader";

const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ? <FullPageLoader /> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide Loader
    ];
};

export default useFullPageLoader;
