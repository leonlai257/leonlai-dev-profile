import Link from 'next/link';
import { styled } from '@src/stitches.config';
import { flexCenter } from '../style/flex';

export const CustomLink = styled(Link, {
    ...flexCenter,
    width: '$full',
    height: '$full',
});
