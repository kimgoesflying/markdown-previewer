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
        '### Markdown Previewer\n\n---\n\n##### Created by: [Elizarova](https://github.com/Elizarova "Github")',
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
    if (window.innerWidth <= 760) {
      if (this.state.editorExpand === this.state.previewExpand) {
        this.setState({
          previewExpand: !this.state.previewExpand,
          editorExpand: this.state.editorExpand,
          viewButton: true,
        });
      } else {
        this.setState({
          previewExpand: this.state.previewExpand,
          editorExpand: this.state.editorExpand,
          viewButton: true,
        });
      }
    } else {
      this.setState({
        previewExpand: false,
        editorExpand: false,
        viewButton: false,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  render() {
    let editorClass = 'col-md-6';
    let previewClass = 'col-md-6 d-none d-md-block';

    if (this.state.editorExpand) {
      editorClass = 'col-md-12';
      previewClass = 'd-none';
    } else if (this.state.previewExpand) {
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
                handleExpand={this.toggleEditorSize}
                handleView={this.toggleView}
                viewButton={this.state.viewButton}
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

            <div className={`${previewClass}`}>
              <EditorToolbar
                name="Preview"
                handleExpand={this.togglePreviewSize}
                handleView={this.toggleView}
                viewButton={this.state.viewButton}
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
