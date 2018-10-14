import React, { Component } from "react";
import {Button} from "semantic-ui-react";
import PropTypes from 'prop-types';

class Category extends Component {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    unread: PropTypes.number.isRequired,
    categoryId: PropTypes.any  /*,
    callback: PropTypes.func.isRequired */
  };

  render() {
    let {categoryName, unread} = this.props;
    return (
      <Button 
        size="large"
        icon="rss"
        content={categoryName}
        label={{ as: 'a', basic: true, content: unread }}>
      </Button> 
    );
  }
}

export default Category;
