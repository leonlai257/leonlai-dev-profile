import { Html, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

interface TitleProps {
    title: string;
    subText: string;
    scrollText: string;
}

const WelcomeText = (props: TitleProps) => {
    const scroll = useScroll();

    const { title, subText, scrollText } = props;

    const displayRef = useRef<HTMLDivElement>(null!);

    const [displayTitle, setDisplayTitle] = useState<string>('');
    const [displaySubText, setDisplaySubText] = useState<string>('');
    const [displayScrollText, setDisplayScrollText] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayTitle.length < title.length) {
                setDisplayTitle(title.substring(0, displayTitle.length + 1));
            } else if (
                props.subText !== undefined &&
                displaySubText.length < subText.length
            ) {
                setDisplaySubText(
                    subText.substring(0, displaySubText.length + 1)
                );
            } else if (
                props !== undefined &&
                displayScrollText.length < scrollText.length
            ) {
                setDisplayScrollText(
                    scrollText.substring(0, displayScrollText.length + 1)
                );
            }
        }, 50);

        return () => clearInterval(interval);
    });

    const opacityOffset = 8;

    useFrame(() => {
        const r1 = scroll.range(0 / 2, 1 / 2);
        if (r1 * opacityOffset < 1 && displayRef.current !== null) {
            displayRef.current.style.opacity = (
                1 -
                r1 * opacityOffset
            ).toString();
        }
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
                position: 'sticky',
            }}
            position={[0, 0, 0]}
        >
            <div
                ref={displayRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: '40%',
                }}
            >
                <h1 style={{}}>{displayTitle}</h1>
                <h2 style={{}}>{displaySubText}</h2>
                <h4 style={{}}>{displayScrollText}</h4>
            </div>
        </Html>
    );
};

export default WelcomeText;
