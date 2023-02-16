import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';

interface TitleProps {
    title: string;
    subText?: string;
}

const Welcome = (props: TitleProps) => {
    const [displayTitle, setDisplayTitle] = useState<string>('');
    const [displaySubText, setDisplaySubText] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayTitle.length < props.title.length) {
                setDisplayTitle(
                    props.title.substring(0, displayTitle.length + 1)
                );
            } else if (
                props.subText !== undefined &&
                displaySubText.length < props.subText.length
            ) {
                setDisplaySubText(
                    props.subText.substring(0, displaySubText.length + 1)
                );
            }
        }, 150);

        return () => clearInterval(interval);
    });

    return (
        <Html
            center
            style={{
                textAlign: 'center',
                left: 0,
                right: 0,
                margin: 'auto',
                width: '100vw',
                whiteSpace: 'pre-wrap',
            }}
            position={[0, 0, 0]}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                <h1 style={{}}>{displayTitle}</h1>
                <h4 style={{}}>{displaySubText}</h4>
            </div>
        </Html>
    );
};

export default Welcome;
