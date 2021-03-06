import { useEffect, useState } from "react";
import CallToAction from "../components/callToAction/callToAction";
import Entrepreneurs from "../components/entrepreneurs/entrepreneurs";
import Layout from "../components/layout/layout";
import Partners from "../components/partners/partners";
import Program from "../components/program/program";
import Starting from "../components/starting/starting";
import Topper from "../components/topper/topper";

const Page = () =>
{
    const [starting, setStarting] = useState(true);

    useEffect(() =>
        {
            window.scrollTo(0, 0);
            setTimeout(() => setStarting(false), 1500);
        }, []
    );

    useEffect(() =>
        {
            const body = document.querySelector('body');

            if(starting) body.style.overflow = 'hidden';
            else body.style.overflow = 'auto';
        }, [starting]
    );

    return (
        <Layout>
            <Starting active={starting} />
            <Topper />
            <Program />
            {/*<Entrepreneurs />*/}
            {/*<CallToAction />*/}
            <Partners />
        </Layout>
    );
}

export default Page;