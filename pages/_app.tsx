import { Canvas } from '@react-three/fiber';
import { Entrance } from '@src/components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'wouter';
import Main from '.';
import About from './about';
import Contact from './contact';
import Work from './work';
import { globalStyles } from '@src/styles';
import type { AppProps } from 'next/app';

export default function App({ pageProps }: AppProps) {
    const router = useRouter();
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        globalStyles();
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Head>
                <title>Leon Lai</title>
                <meta name="Leon Lai" content="Leon Lai's personal website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto+Mono:wght@600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Canvas>
                <ambientLight />
                <pointLight position={[0, 10, 0]} intensity={1} castShadow />
                <pointLight position={[0, -5, 0]} intensity={1} />
                <Switch>
                    <Route path="/">
                        <Contact {...pageProps} />
                        {/* <Main {...pageProps} /> */}
                    </Route>
                    <Route path="/work">
                        <Work {...pageProps} />
                    </Route>
                    <Route path="/about">
                        <About {...pageProps} />
                    </Route>
                    <Route path="/contact">
                        <Contact {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
            {/* {router.pathname == '/' && !enter && (
                <Entrance onEnter={() => setEnter(true)} />
            )} */}
        </div>
    );
}
