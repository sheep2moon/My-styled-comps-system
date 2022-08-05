import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout.jsx";
import "../styles/globals.css";
import { theme } from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
