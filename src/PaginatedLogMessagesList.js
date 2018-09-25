import React from 'react'
import {connect} from 'react-redux'

import LogMessagesList from './LogMessagesList'
import ReactPaginate from 'react-paginate'
import LoadingWithLabel from './LoadingWithLabel'

import './PaginatedLogMessagesList.css'
import filter from './reducer/filter';

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
    const {logMessages, filtering, parsingFile, perPage, settings} = this.props    

    if (!logMessages || !logMessages.length) return <p>No messages</p>

    let from = selectedPage * perPage;
    var logMessagesForPage = logMessages.slice(from, from + perPage);

    let pagesCount = Math.ceil(logMessages.length / perPage);

    let loading = null;
    if (filtering) {
      loading = <LoadingWithLabel label="Фильрация..."/>
    }
  
    return (
        <div>
          {loading}
          <ReactPaginate containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         pageCount={pagesCount}
                         onPageChange={this.handlePageClick}/>
          <LogMessagesList logMessages={logMessagesForPage} 
                           settings={settings}/>
        </div>
      )
  }
}

export default connect((state) => {
  return {
    filtering: state.logMessages.filtering,
  }
},{})(PaginatedLogMessagesList)
