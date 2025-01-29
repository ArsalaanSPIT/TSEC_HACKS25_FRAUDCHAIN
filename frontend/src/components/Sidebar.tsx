import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Listbox, ListboxItem, User } from '@heroui/react';

export const ListboxWrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200">
    {children}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currPage, setCurrPage] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currPage) {
      navigate(currPage);
    }
  }, [currPage, navigate, location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-1/5 p-10 h-full text-2xl">
      Menu
      <ListboxWrapper>
        <Listbox
          onAction={(key) => setCurrPage(key)}
          aria-label="Actions"
          className="text-center gap-10"
        >
          <ListboxItem
            key="/dashboard"
            className={
              isActive('/dashboard')
                ? 'bg-accent-200 rounded my-2'
                : 'hover:bg-accent-200 rounded my-2'
            }
          >
            Dashboard
          </ListboxItem>
          <ListboxItem
            key="/portfolio"
            className={
              isActive('/portfolio')
                ? 'bg-accent-200 rounded my-2'
                : 'hover:bg-accent-200 rounded my-2'
            }
          >
            Portfolio
          </ListboxItem>
          <ListboxItem
            key="/proposals"
            className={
              isActive('/proposals')
                ? 'bg-accent-200 rounded my-2'
                : 'hover:bg-accent-200 rounded my-2'
            }
          >
            Proposals
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
      <User
        avatarProps={{
          src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        }}
        description="Product Designer"
        name="Jane Doe"
        className="text-base fixed bottom-10"
      />
    </div>
  );
};

export default Sidebar;
