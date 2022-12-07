import React, { useRef } from 'react';
import * as THREE from 'three';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';

interface TitleProps {
    text: string;
}

const Title = (props: TitleProps) => {
    return (
        <Html center>
            <h1>{'WELCOME!'}</h1>
        </Html>
    );
};

export default Title;
