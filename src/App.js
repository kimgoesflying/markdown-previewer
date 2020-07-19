import React, { Component } from 'react';
import { Container } from 'react-bootstrap/';

import marked from 'marked';
import NavbarComponent from './components/NavbarComponent';
import EditorToolbar from './components/EditorToolbar';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewButton: false,
      editorExpand: false,
      previewExpand: false,
      markdown:
        '### Responsive Markdown Previewer\n\n---\n\n##### Created by: [Elizarova](https://github.com/Elizarova "Github")',
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  toggleEditorSize = () => {
    this.setState({
      editorExpand: !this.state.editorExpand,
      viewButton: !this.state.viewButton,
    });
  };

  togglePreviewSize = () => {
    this.setState({
      previewExpand: !this.state.previewExpand,
      viewButton: !this.state.viewButton,
    });
  };

  toggleView = () => {
    this.setState({
      previewExpand: !this.state.previewExpand,
      editorExpand: !this.state.editorExpand,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentEditorExpand = window.innerWidth <= 760;
    if (currentEditorExpand !== this.state.editorExpand) {
      this.setState({ editorExpand: currentEditorExpand });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  render() {
    let expandEditorClass = 'col-md-6';
    let expandPreviewClass = 'col-md-6 d-none d-md-block';

    if (this.state.editorExpand) {
      expandEditorClass = 'col-md-12';
      expandPreviewClass = 'd-none';
    } else if (this.state.previewExpand) {
      expandEditorClass = 'd-none';
      expandPreviewClass = 'col-md-12';
    }

    return (
      <React.Fragment>
        <NavbarComponent />

        <Container>
          <div className="row mt-4">
            <div className={expandEditorClass}>
              <EditorToolbar
                name="Markdown"
                expand={this.toggleEditorSize}
                viewButton={this.state.viewButton}
                view={this.toggleView}
                isExpand={this.state.editorExpand}
              />
              <div className="input border border-top-0">
                <textarea
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className={`${expandPreviewClass}`}>
              <EditorToolbar
                name="Preview"
                expand={this.togglePreviewSize}
                viewButton={this.state.viewButton}
                view={this.toggleView}
                isExpand={this.state.previewExpand}
              />
              <div
                className="output border border-top-0"
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
