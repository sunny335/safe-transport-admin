import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';

import SimpleNavbar from './SimpleNavbar';
import ToggleNavbar from './ToggleNavbar';

const NavbarDoc = () => {
  return (
    <DocCard title="navbar" id="navbar">
      <SimpleNavbar />
      <hr />
      <ToggleNavbar />
    </DocCard>
  );
};

export default NavbarDoc;
