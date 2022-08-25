import React, { Component } from 'react';
import Item from "./Todoitems"


class TodoList extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>todo list</h2>
                    <Item/>
                </section>
            </div>
        );
    }
}

export default TodoList;
