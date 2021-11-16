import { AnimateSharedLayout } from "framer-motion";
import "../../public/scss/main.scss";

const App = ({ Component, pageProps }) =>
(
    <AnimateSharedLayout>
        <Component {...pageProps} />
    </AnimateSharedLayout>
);

export default App;