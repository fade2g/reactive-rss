import React, {Component} from 'react';
import {loadCategories} from "../../../api/api";

class CategoriesView extends Component {

  state = {
    categories: []
  };

  componentDidMount() {
    loadCategories().then(data => {
      this.setState({categories: data.content});
    });
  }

  render() {
    const {categories} = this.state;
    return (<div>
      {categories.map(category => {
        return (<p key={category.id}>{category.title} - {category.id}</p>)
      })}
    </div>)
  }
}

export default CategoriesView;
