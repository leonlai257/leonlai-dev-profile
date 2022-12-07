import { Canvas } from '@react-three/fiber';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
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
                <Component {...pageProps} />
            </Canvas>
        </div>
    );
}

export default App;
