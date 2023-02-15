import { ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { globalStyles } from '@src/stitches.config';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

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
                }}>
                <Canvas>
                    <ambientLight />
                    <directionalLight position={[0, 0, 0]} intensity={1} />
                    <ScrollControls
                        pages={2}
                        distance={1}
                        damping={1}
                        horizontal={false}
                        infinite={false}>
                        <Component {...pageProps} />
                    </ScrollControls>
                </Canvas>
            </div>
        </>
    );
}

export default App;
