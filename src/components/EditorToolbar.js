import React from 'react';
import { Button } from 'react-bootstrap/';

const EditorToolbar = ({ name, expand, viewButton, view, isExpand }) => {
  let viewButtonClass = viewButton ? 'd-inlinek' : 'd-inline d-md-none';

  return (
    <div className="border d-flex p-2 justify-content-between align-items-center bg-light">
      {name}
      <div>
        <Button
          className={viewButtonClass}
          type="button"
          variant="light"
          onClick={() => view()}
        >
          <i className="far fa-eye"></i>
        </Button>
        <Button
          className="d-none d-md-inline"
          type="button"
          variant="light"
          onClick={() => expand()}
        >
          {isExpand ? (
            <i class="fas fa-compress-alt"></i>
          ) : (
            <i className="fas fa-expand-alt"></i>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
