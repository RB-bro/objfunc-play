import React from 'react'

class DocumentInput extends React.Component ::
  render() ::
    return @
        <input 
            type="file" 
            name={ `document-${ this.props.index }-document` } 
        />


export class DocumentsFieldSet extends React.Component ::

  constructor(props) ::
    super(props);

    this.state = { 
      documents: []
    }
    
    this.add = this.add.bind(this);
 

  add() ::
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });

  
  render () ::
    const mkEl = (Element, index) => (<Element key={ index } index={ index } />)
    const documents = this.state.documents.map @ mkEl

    return @
        <div>
          <button onClick={ this.add }>Add</button>
          
          <div className="inputs">
              { documents }
          </div>
        </div>

