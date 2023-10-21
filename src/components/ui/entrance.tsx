import { HBox, VBox, Text } from '@src/components/html';
import { gsap } from 'gsap';

interface EntranceProps {
    onEnter: () => void;
}

export const Entrance = ({ onEnter }: EntranceProps) => {
    return (
        <HBox
            onClick={onEnter}
            css={{
                position: 'absolute',
                left: 0,
                top: 0,
                inset: '0 0 0 0',
                margin: 'auto',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                whiteSpace: 'pre-wrap',
                backdropFilter: 'blur(4px)',
                bg: 'transparent',
                zIndex: 999,
            }}
        >
            <VBox
                css={{
                    margin: 'auto',
                    w: 'fit-content',
                    fontFamily: 'Noto Sans',
                }}
            >
                <HBox
                    css={{
                        items: 'end',
                    }}
                >
                    <Text responsive="title">{`Hey, My Name is`}</Text>
                    <Text responsive="headline">{`Ka Ming Lai`}</Text>
                    <Text responsive="title">{`You can call me Leon.`}</Text>
                </HBox>

                <Text responsive="title">{`I am a Full Stack developer, and is passionate about creating visually stunning websites.`}</Text>
                <Text responsive="title">{'Scroll to learn more...'}</Text>
            </VBox>
        </HBox>
    );
};
