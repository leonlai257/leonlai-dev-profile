import { Canvas } from '@react-three/fiber';
import { Entrance } from '@src/components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Route, Switch } from 'wouter';
import Main from '.';
import About from './about';
import Contact from './contact';
import Work from './work';

function App() {
    const router = useRouter();
    const [enter, setEnter] = useState(false);

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

            {/* {router.pathname == '/' && !enter && (
                <Entrance onEnter={() => setEnter(true)} />
            )} */}
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 10, 0]} intensity={1} castShadow />
                <pointLight position={[0, -5, 0]} intensity={1} />
                <Switch>
                    <Route path="/">
                        <Main />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}

export default App;
