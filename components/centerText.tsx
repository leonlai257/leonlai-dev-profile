import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';

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
        }, 200);

        return () => clearInterval(interval);
    });

    return (
        <Html
            as="div"
            center
            style={{
                whiteSpace: 'nowrap',
            }}>
            <h1>{displayTitle}</h1>
            <h4 style={{ justifySelf: 'right' }}>{displaySubText}</h4>
        </Html>
    );
};

export default Welcome;
