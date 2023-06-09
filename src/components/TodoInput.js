import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" />
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="add to do item" value={item}
              onChange={handleChange}
            />

          </div>
          <button type="submit" className={editItem?"btn btn-block btn-warning mt-3 text-uppercase mx-5":"btn btn-block btn-primary mt-3 text-uppercase mx-5"}
          disabled={item?false:true}
          style={{ width: '90%' }}>
            {editItem ? "edit item" : "add item"}
          </button>
        </form>

      </div>
    )
  }
}
