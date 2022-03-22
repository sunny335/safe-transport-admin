import React, { useState } from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';

const DropdownDoc = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <DocCard title="dropdown" id="dropdown">
      {/** base dropdown */}
      <div className="dropdown">
        <button
          onClick={toggle}
          className={`btn btn-secondary dropdown-toggle ${
            dropdownOpen ? 'show' : ''
          }`}
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded={`${!!dropdownOpen}`}
        >
          Dropdown button
        </button>
        <ul
          className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton"
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="dropdown">
        <button
          onClick={toggle}
          className={`btn btn-secondary dropdown-toggle ${
            dropdownOpen ? 'show' : ''
          }`}
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded={`${!!dropdownOpen}`}
        >
          Dropdown button
        </button>
        <ul
          className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </DocCard>
  );
};

export default DropdownDoc;
