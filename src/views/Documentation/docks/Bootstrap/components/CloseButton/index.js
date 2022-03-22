import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';

const CloseButton = () => {
  return (
    <DocCard title="close button" id="closeButton">
      {/** base close button */}
      <button type="button" className="btn-close" aria-label="Close" />
      <hr />
      {/** disabled state button */}
      <button type="button" className="btn-close" disabled aria-label="Close" />
      <hr />
      {/** white variant button */}
      <div className="white-variant-button bg-dark py-4 px-3">
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
        />
        <button
          type="button"
          className="btn-close btn-close-white"
          disabled
          aria-label="Close"
        />
      </div>
    </DocCard>
  );
};

export default CloseButton;
