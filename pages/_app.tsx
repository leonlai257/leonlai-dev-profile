import { Canvas } from '@react-three/fiber';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Route, Switch } from 'wouter';
import Main from '.';
import Experiences from './experiences';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Leon Lai</title>
                <meta name="Leon Lai" content="Leon Lai's personal website" />
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
