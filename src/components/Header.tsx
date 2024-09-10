import { type ReactNode } from 'react';

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
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
