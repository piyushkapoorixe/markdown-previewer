// npm install marked
import React from 'react';
import './App.css'

let marked = require("marked");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdowntext: defaulttext
    };
  }

  autoupdate(markdowntext) {  
      this.setState ({markdowntext});
  }  

  render() 
  {
    return (
      <div className="App">
        <div className="container">
          <center><h1>Markdown Previewer</h1></center>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-sm-6 col-md-6 col-lg-6" style={markdownbox}>
              <center><h1 style={{color: "white"}}>Markdown Box</h1></center>
              <div>
                <textarea style={textareaeditor} id="editor" value={this.state.markdown} onChange={(e) => {this.autoupdate(e.target.value);}}>{this.state.markdowntext}</textarea>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3"></div>
          </div>
          <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-sm-8 col-md-8 col-lg-8" style={previewbox}>
              <center><h1 style={{color: "white"}}>Preview Box</h1></center>
              {/* dangerouslySetInnerHTML is used to set html directly from React
                to use marked library -> marked(this.state.markdown)*/}
              <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdowntext)}}></div>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

const markdownbox = {
  backgroundColor: "gray",
  marginTop: 20,
  borderRadius: 10
}

const previewbox = {
  backgroundColor: "gray",
  marginTop: 30,
  borderRadius: 10
}

const textareaeditor = {
  width: "100%",
  height: 300
}

// add / before ` in the content
const defaulttext = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`;

/* 
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

![React Logo w/ Text](https://goo.gl/Umyytc)
*/

export default App;
