import { CustomLink, Button } from '@src/components/atoms';
import { CSS } from '@stitches/react/types/css-util';

interface LinkButtonProps {
  link: string;
  text: string;
  buttonCss?: CSS;
}

export const LinkButton = ({ link, text, buttonCss }: LinkButtonProps) => {
  return (
    <Button css={buttonCss}>
      <CustomLink href={link}>{text}</CustomLink>
    </Button>
  );
};
