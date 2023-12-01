import { Outlet } from 'react-router-dom';

import { SubHeader } from '@timmons-group/shared-react-components';
import { Button } from '@mui/material';

type NavLink = {
  id: string;
  title: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id:'home', title: 'Home', href: '/' },
  {
    id: 'about',
    title: 'About',
    href: '/about',
  },
];
const Layout: React.FC = () => {
  return (
    <>
      <SubHeader data-src-form-subheader="genericForm"
        title="Title Goes here"
        rightRender={
          () => {
            return (
              // create buttons from the navLinks array
              navLinks.map((link, index) => {
                return (
                  <Button
                    key={link.href}
                    href={link.href}
                    sx = {{ mr: index === navLinks.length - 1 ? 0 : 2 }}
                    data-src-header-button={`button-${link.id}`}
                  >
                    {link.title}
                  </Button>
                );
              })
            )
          }
        }
      />
      <Outlet />
    </>
  );
};

export default Layout;
