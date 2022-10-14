import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap/';

import { marked } from 'marked';
import NavbarComponent from './components/NavbarComponent';
import EditorToolbar from './components/EditorToolbar';

import './App.css';

marked.setOptions({
  breaks: true,
});

export default function App() {
  const [viewButton, setViewButton] = useState(false);
  const [editorExpand, setEditorExpand] = useState(false);
  const [previewExpand, setPreviewExpand] = useState(false);
  const [markdown, setMarkdown] = useState(
    '# Markdown Previewer\n---\n## Syntax Guide\n\n#### Emphasis\n*This text will be italic*\n**This text will be bold**\n_You **can** combine them_\n\n#### Lists\n* Item 1\n* Item 2\n  * Item 2a\n  * Item 2b\n\n#### Blockquotes\n> Dorothy followed her through many of the beautiful rooms in her castle.\n\n#### Images\n![GitHub Logo](/images/logo.png)\n\n#### Inline code\nI think you should use an `<addr>` element here instead.\n\n#### Code Blocks\n```\n<html>\n  <head>\n    <title>Test</title>\n  </head>\n```\n---\n##### Created by: [KimGoesFlying](https://github.com/KimGoesFlying "Github") 2020'
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

  useEffect(() => {
    const load = () => {
      if (window && window.innerWidth <= 760) {
        setPreviewExpand(!previewExpand);
        setEditorExpand(editorExpand);
        setViewButton(!viewButton);
      }
    };
    window.addEventListener('load', load);

    return () => window.removeEventListener('load', load);
  }, [previewExpand, editorExpand, viewButton]);

  useEffect(() => {
    const resize = () => {
      if (window && window.innerWidth <= 760) {
        if (editorExpand === previewExpand) {
          setPreviewExpand(!previewExpand);
          setEditorExpand(editorExpand);
          setViewButton(true);
        } else {
          setPreviewExpand(previewExpand);
          setEditorExpand(editorExpand);
          setViewButton(true);
        }
      } else {
        setPreviewExpand(false);
        setEditorExpand(false);
        setViewButton(false);
      }
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [previewExpand, editorExpand]);

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
                id="editor"
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
              id="preview"
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
