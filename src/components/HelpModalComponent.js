import React from 'react';
import { Modal } from 'react-bootstrap/';

const HelpModalComponent = ({ handleClose, show }) => {
  const markdownGuide = (
    <div>
      <h5>Headers</h5>
      <pre className="bg-light p-2">
        <code>
          # This is an h1 tag <br />
          ## This is an h2 tag <br />
          ###### This is an h6 tag
        </code>
      </pre>
      <h5>Emphasis</h5>
      <pre className="bg-light p-2">
        <code>
          *This text will be italic* <br />
          _This will also be italic_
          <br />
          <br />
          **This text will be bold**
          <br />
          __This will also be bold__
          <br />
          <br />
          _You **can** combine them_
          <br />
        </code>
      </pre>
      <h5>Lists</h5>
      <h6>Unordered</h6>
      <pre className="bg-light p-2">
        <code>
          * Item 1<br />
          * Item 2<br />
          &nbsp;* Item 2a
          <br />
          &nbsp;* Item 2b
          <br />
        </code>
      </pre>
      <h6>Ordered</h6>
      <pre className="bg-light p-2">
        <code>
          1. Item 1<br />
          1. Item 2<br />
          1. Item 3<br />
          &nbsp;1. Item 2a
          <br />
          &nbsp;1. Item 2b
          <br />
        </code>
      </pre>
      <h5>Images</h5>
      <pre className="bg-light p-2">
        <code>
          ![GitHub Logo](/images/logo.png)
          <br />
          Format: ![Alt Text](url)
        </code>
      </pre>
      <h5>Links</h5>
      <pre className="bg-light p-2">
        <code>
          http://github.com - automatic! <br />
          [GitHub](http://github.com)
        </code>
      </pre>
      <h5>Blockquotes</h5>
      <pre className="bg-light p-2">
        <code>
          &gt; Dorothy followed her through many of the beautiful rooms in her
          castle.
          <br />
          &gt;
          <br />
          &gt;&gt;The Witch bade her clean the pots and kettles and sweep the
          floor and keep the fire fed with wood.
        </code>
      </pre>
      <h5>Inline code</h5>
      <pre className="bg-light p-2">
        <code>
          I think you should use an `&lt;addr&gt;` element here instead.
        </code>
      </pre>
      <h5>Code Blocks</h5>
      <pre className="bg-light p-2">
        <code>
          ``` <br />
          &lt;html&gt;
          <br />
          &ensp;&lt;head&gt;
          <br />
          &ensp;&ensp;&lt;title&gt;Test&lt;&#47;title&gt;
          <br /> &lt;&#47;head&gt; <br />
          ```
        </code>
      </pre>
    </div>
  );

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Markdown syntax guide</Modal.Title>
      </Modal.Header>
      <Modal.Body>{markdownGuide}</Modal.Body>
    </Modal>
  );
};

export default HelpModalComponent;
