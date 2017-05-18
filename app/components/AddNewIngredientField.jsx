class DocumentInput extends React.Component {
  render() {
    return <input 
      type="file" 
      name={ `document-${ this.props.index }-document` } 
    />;
  }
}

class DocumentsFieldSet extends React.Component{
  constructor(props){
    super(props);

    this.state = { 
      documents: []
    }
    
    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }
  
  render () {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });

    return <div>
      <button onClick={ this.add }>Add</button>
    
      <div className="inputs">
        { documents }
      </div>
    </div>
  }
}

ReactDOM.render(
  <DocumentsFieldSet />,
  document.getElementById('container')
);