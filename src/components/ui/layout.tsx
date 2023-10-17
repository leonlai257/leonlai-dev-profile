import { Html } from '@react-three/drei';
import { Animation, AnimationTypes } from '@src/styles/animations';

export const Layout = (props: {
    animation: AnimationTypes;
    setAnimation: (animation: AnimationTypes) => void;
}) => {
    const { animation, setAnimation } = props;

    return (
        <Html
            fullscreen
            zIndexRange={[110, 0]}
            style={{ pointerEvents: 'none', background: '#000' }}
        >
            <Animation
                onAnimationEnd={() => {
                    setAnimation(AnimationTypes.FADEOUT);
                }}
                type={animation || AnimationTypes.FADEOUT}
            />
        </Html>
    );
};
