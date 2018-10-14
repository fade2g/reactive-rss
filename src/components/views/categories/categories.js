import React, { Component } from "react";
import { loadCategories } from "../../../api/api";
import Category from "./category";
import { Grid } from "semantic-ui-react";

class CategoriesView extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    loadCategories().then(data => {
      this.setState({ categories: data.content });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <Grid className="ui doubling six column grid">
        <Grid.Row>
          {categories.map(category => {
            return (
              <Grid.Column key={category.id}>
                <Category
                  categoryName={category.title}
                  categoryId={category.id}
                  unread={category.unread}
                />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default CategoriesView;
