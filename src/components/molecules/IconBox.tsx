import { styled } from '@src/stitches.config';
import { StaticImageData } from 'next/image';
import { Icon, IconWrapper } from '../atoms';
import { flexCenter } from '../style/flex';

interface IconBoxProps {
  image: StaticImageData;
  size?: 'default' | 'small' | 'large' | 'medium';
  alt: string;
  link?: string
}

export const IconBox = ({
  image,
  size = 'default',
  alt = 'icon',
}: IconBoxProps) => {
  return (
    <IconWrapper size={size}>
      <Icon src={image} alt={alt} />
    </IconWrapper>
  );
};
