import React from 'react'

import LogMessagesList from './LogMessagesList'
import ReactPaginate from 'react-paginate'

import './PaginatedLogMessagesList.css'

class PaginatedLogMessagesList extends React.Component
{
  state = {
    selectedPage: 0
  }

  handlePageClick= (data) => {
    this.setState({selectedPage: data.selected});
  }

  render() {
    const {selectedPage} = this.state
    const {logMessages, perPage} = this.props    
        
    if (!logMessages || !logMessages.length) return <p>No messages</p>

    let from = selectedPage * perPage;
    var logMessagesForPage = logMessages.slice(from, from + perPage);

    let pagesCount = Math.ceil(logMessages.length / perPage);
  
    return (
        <div>
          <ReactPaginate containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         pageCount={pagesCount}
                         onPageChange={this.handlePageClick}/>
          <LogMessagesList logMessages={logMessagesForPage} />
        </div>
      )
  }
}

export default PaginatedLogMessagesList
