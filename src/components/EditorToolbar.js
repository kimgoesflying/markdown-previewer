import React from 'react';
import { Button } from 'react-bootstrap/';

const EditorToolbar = ({
  name,
  handleExpand,
  handleView,
  viewButton,
  isExpand,
}) => {
  let viewButtonClass = viewButton ? 'd-inline' : 'd-inline d-md-none';

  return (
    <div className="toolbar bg-light border d-flex p-2 justify-content-between align-items-center">
      {name}
      <div>
        <Button
          className={viewButtonClass}
          type="button"
          variant="light"
          onClick={() => handleView()}
        >
          <i className="far fa-eye"></i>
        </Button>
        <Button
          className="d-none d-md-inline "
          type="button"
          variant="light"
          onClick={() => handleExpand()}
        >
          {isExpand ? (
            <i className="fas fa-compress-alt"></i>
          ) : (
            <i className="fas fa-expand-alt"></i>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
