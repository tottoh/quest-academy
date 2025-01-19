// Set up the marked library with desired options
marked.setOptions({
  breaks: true, // Enable line breaks
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

// Custom renderer for links to open in new tabs
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

// React component for the entire app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  // Handle changes in the editor
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  // Toggle maximization of the editor
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  // Toggle maximization of the previewer
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }

  render() {
    const { editorMaximized, previewMaximized } = this.state;
    const classes = editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="converter" />
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

// Toolbar component
const Toolbar = (props) => (
  <div className="toolbar">
    <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
    {props.text}
    <i className={props.icon} onClick={props.onClick} />
  </div>
);

// Editor component
const Editor = (props) => (
  <textarea
    id="editor"
    onChange={props.onChange}
    type="text"
    value={props.markdown}
  />
);

// Preview component
const Preview = (props) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(props.markdown, { renderer: renderer })
    }}
  />
);

// Placeholder markdown content
const placeholder = `hi
`;

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('app'));
