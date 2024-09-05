import { Children, type ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
}

const Header = ({ children, image }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
