import React from 'react';
import { Input, Label } from 'reactstrap';

import DocCard from 'src/views/Documentation/components/DocCard';

const RangeDoc = () => {
  return (
    <DocCard title="range" id="range">
      {/** base range */}
      <Label for="customRange1" className="form-label">
        Example range
      </Label>
      <Input type="range" className="form-range" id="customRange1" />
      <hr />
      {/** disabled range */}
      <Label for="disabledRange" className="form-label">
        Disabled range
      </Label>
      <Input type="range" className="form-range" id="disabledRange" disabled />
      <hr />
      {/** min-max range */}
      <Label for="customRange2" className="form-label">
        min-max range
      </Label>
      <Input
        type="range"
        className="form-range"
        min="0"
        max="5"
        id="customRange2"
      />
      <hr />
      {/** steps range */}
      <Label for="customRange3" className="form-label">
        Steps range
      </Label>
      <Input
        type="range"
        className="form-range"
        min="0"
        max="5"
        step="0.5"
        id="customRange3"
      />
    </DocCard>
  );
};

export default RangeDoc;
