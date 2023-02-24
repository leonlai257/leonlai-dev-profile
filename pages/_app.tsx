import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { globalStyles } from '@src/stitches.config';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import Main from '.';
import Experiences from './experiences';

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        globalStyles();
    }, []);

    return (
        <>
            <Head>
                <title>Leon Lai</title>
                <meta
                    name="description"
                    content="Leon Lai's personal website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                <Canvas>
                    <Switch>
                        <Route path="/">
                            <Main />
                        </Route>
                        <Route path="/experiences">
                            <Experiences />
                        </Route>
                    </Switch>
                </Canvas>
            </div>
        </>
    );
}

export default App;
