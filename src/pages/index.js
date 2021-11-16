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
            setTimeout(() => setStarting(false), 1300);
        }, []
    )

    return (
        <Layout>
            <Starting active={starting} />
            <Topper />
        </Layout>
    );
}

export default Page;