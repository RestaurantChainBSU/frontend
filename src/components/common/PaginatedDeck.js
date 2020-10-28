import { React, Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';

class PaginatedDeck extends Component {
  
  static _ITEMS_ON_PAGE = 8

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    }
  }

  render() {
    const cards = this.props.cards;

    if (cards.length !== 0) {
      const pagesCount = Math.ceil(cards.length / PaginatedDeck._ITEMS_ON_PAGE);
      const paginationItems = [...Array(pagesCount).keys()].map(i => i + 1)
                                                           .map(pageNum => 
                                                                    <Pagination.Item key={pageNum} 
                                                                                     active={pageNum === this.state.currentPage} 
                                                                                     onClick={() => this._handlePageClick(pageNum)}>
                                                                      {pageNum}
                                                                    </Pagination.Item>);
      const currentPage = this.state.currentPage;

      return (
        <>
          <CardDeck style={{ height: '1000px', width: '80%', margin: 'auto', marginTop: '30px', marginBottom: '30px', justifyContent: 'center' }} >
              {cards.slice(8 * (currentPage - 1), 8 * (currentPage - 1) + 8)}
          </CardDeck>
  
          <Pagination style={{ justifyContent: 'center' }}>{paginationItems}</Pagination>
        </>
      );
    }

    return null;
  }

  _handlePageClick(pageNum) {
    this.setState({
      'currentPage': pageNum,
    })
  }
  
}

export default PaginatedDeck;
