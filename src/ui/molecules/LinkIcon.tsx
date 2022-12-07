import { CustomLink, Button } from '@src/components/atoms';
import { CSS } from '@stitches/react/types/css-util';
import { StaticImageData } from 'next/image';
import { Icon, IconWrapper } from '../atoms';

interface LinkIconProps {
    image: StaticImageData;
    size?: 'default' | 'small' | 'large' | 'medium';
    alt: string;
    link: string;
    iconWrapperCss?: CSS;
}

interface IconBoxProps {}

export const LinkIcon = ({
    image,
    size,
    alt,
    link,
    iconWrapperCss,
}: LinkIconProps) => {
    return (
        <IconWrapper size={size}>
            <CustomLink href={link}>
                <Icon src={image} alt={alt} />
            </CustomLink>
        </IconWrapper>
    );
};
