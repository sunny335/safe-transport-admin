import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';

import BackdropModal from './BackdropModal';
import SimpleModal from './SimpleModal';

const ModalDoc = () => {
  return (
    <DocCard title="modal" id="modal">
      <SimpleModal />
      <hr />
      <BackdropModal />
    </DocCard>
  );
};

export default ModalDoc;
