import React from "react";
import FileViewer from "react-file-viewer";
import "../App.css";
export default class ChooseFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      show: false,
      fileType: "",
      type: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.files[0]);
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      show: true,
      display: false,
      type: event.target.files[0].type,
    });
    setTimeout(() => {
      console.log(this.state.type.includes("pdf"));
      if (this.state.type.includes("pdf")) {
        this.setState({
          fileType: "pdf",
        });
      }
      if (this.state.type.includes("document")) {
        this.setState({
          fileType: "docx",
        });
      }
    }, 1000);
  }
  render() {
    let modell;
    if (this.state.display) {
      modell = (
        <>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <button
                id="close"
                onClick={() => this.setState({ display: !this.state.display })}
                style={{ marginLeft: "97%" }}
              >
                <i className="fas fa-times"></i>
              </button>
              <div id="fileContent" style={{ width: "100%", height: "500px" }}>
                <FileViewer
                  fileType={this.state.fileType}
                  filePath={this.state.file}
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    let btn;
    if(this.state.file){
      btn=(
        <>
        <button
            className="btn"
            onClick={() => this.setState({ display: !this.state.display })}
          >
            <i className="far fa-eye" id="view"/>
               View File
          </button>
        </>
      )
    }

    let inLine;
    this.state.display
      ? (inLine = {
          height: "500vh",
          backgroundColor: "rgba(0,0,0,0.8) ",
          paddingTop: "100px",
        })
      : (inLine = {
          height: "500vh",
          backgroundColor: "rgba(0,0,0,0) ",
          paddingTop: "100px",
        });
    return (
      <>
<div id="nav">
  File Previewer
</div>
        <div style={inLine}>
          <input type="file" onChange={this.handleChange} id="input" />
          {btn}

          <br />
          {modell}
        </div>
      </>
    );
  }
}
