import { useEffect, useState } from "react";
import Article from "../components/article/article";
import Layout from "../components/layout/layout";
import Starting from "../components/starting/starting";
import Topper from "../components/topper/topper";

const Page = () =>
{
    const [starting, setStarting] = useState(true);

    useEffect(() =>
        {
            setTimeout(() => setStarting(false), 1000);
        }, []
    )

    if(!starting)
    {
        return (
            <Layout>
                <Topper />
            </Layout>
        );
    }
    else return <Starting />
}

export default Page;