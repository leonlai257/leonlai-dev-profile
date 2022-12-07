interface SvgProps {
  fill?: string;
}

const Menu = ({ fill = '#282c34' }: SvgProps) => {
  return (
    <svg viewBox="0 0 100 80" width="100%" height="100%" fill={fill}>
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
};

export default Menu;
