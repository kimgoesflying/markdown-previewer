import React, { useState } from 'react';
import { Container } from 'react-bootstrap/';

import marked from 'marked';
import NavbarComponent from './components/NavbarComponent';
import EditorToolbar from './components/EditorToolbar';

import './App.css';

export default function App() {
  const [viewButton, setViewButton] = useState(false);
  const [editorExpand, setEditorExpand] = useState(false);
  const [previewExpand, setPreviewExpand] = useState(false);
  const [markdown, setMarkdown] = useState(
    '### Markdown Previewer\n\n---\n\n##### Created by: [Elizarova](https://github.com/Elizarova "Github")'
  );

  const updateMarkdown = (markdown) => setMarkdown(markdown);

  const toggleEditorSize = () => {
    setEditorExpand(!editorExpand);
    setViewButton(!viewButton);
  };

  const togglePreviewSize = () => {
    setPreviewExpand(!previewExpand);
    setViewButton(!viewButton);
  };

  const toggleView = () => {
    setPreviewExpand(!previewExpand);
    setEditorExpand(!editorExpand);
  };

  // componentDidMount() {
  //   window.addEventListener('resize', this.resize.bind(this));
  //   this.resize();
  // }

  // resize() {
  //   if (window.innerWidth <= 760) {
  //     if (this.state.editorExpand === this.state.previewExpand) {
  //       this.setState({
  //         previewExpand: !this.state.previewExpand,
  //         editorExpand: this.state.editorExpand,
  //         viewButton: true,
  //       });
  //     } else {
  //       this.setState({
  //         previewExpand: this.state.previewExpand,
  //         editorExpand: this.state.editorExpand,
  //         viewButton: true,
  //       });
  //     }
  //   } else {
  //     this.setState({
  //       previewExpand: false,
  //       editorExpand: false,
  //       viewButton: false,
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resize.bind(this));
  // }

  let editorClass = 'col-md-6';
  let previewClass = 'col-md-6 d-none d-md-block';

  if (editorExpand) {
    editorClass = 'col-md-12';
    previewClass = 'd-none';
  } else if (previewExpand) {
    editorClass = 'd-none';
    previewClass = 'col-md-12';
  }

  return (
    <React.Fragment>
      <NavbarComponent />

      <Container>
        <div className="row mt-4">
          <div className={editorClass}>
            <EditorToolbar
              name="Markdown"
              handleExpand={toggleEditorSize}
              handleView={toggleView}
              viewButton={viewButton}
              isExpand={editorExpand}
            />
            <div className="input border border-top-0">
              <textarea
                value={markdown}
                onChange={(e) => {
                  updateMarkdown(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className={`${previewClass}`}>
            <EditorToolbar
              name="Preview"
              handleExpand={togglePreviewSize}
              handleView={toggleView}
              viewButton={viewButton}
              isExpand={previewExpand}
            />
            <div
              className="output border border-top-0"
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            ></div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
