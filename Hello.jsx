import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class Hello extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
       data: [],
       offset: 0,
       pageNum : 0
     }
 }

 componentDidMount() {
   this.loadCommentsFromServer();
 }

 loadCommentsFromServer() {
        this.setState(
        {
          pageNum: Math.ceil( 100 / 5)
        });
  }

 handlePageClick (data) {
   let selected = data.selected;
   let offset = Math.ceil(selected * 30);

   this.setState({offset: offset}, () => {
     this.loadCommentsFromServer(offset);
   });
 }

render() {
  return  <div className="commentBox">
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           pageNum={this.state.pageNum}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           clickCallback={this.handlePageClick.bind(this)}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
           </div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
