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
