import React from 'react';

function Todo({todo, makeComplete, deleteItem}) {

    return (
        <div className="row mt-5"> 
            <div className="col-sm-8 sm-offset-2 mx-auto">
            <ul className="list-group">
                { todo.map( item => (
                    <li key={item.id} style={ item.complete===true ? { textDecoration: 'line-through' } : { } } className="list-group-item"> { item.title } 
                        <button 
                            className="btn btn-danger btn-sm float-right ml-2"
                            onClick={ ()=> deleteItem(item.id) }
                        > Delete 
                        </button>
                        <button 
                            className={ item.complete===true ? "btn btn-secondary btn-sm float-right" : "btn btn-success btn-sm float-right"}
                            onClick={() => makeComplete(item.id)}
                        > { item.complete===true ? 'Incomplete' : 'Complete' } </button>
                    </li> 
                ))  }
            </ul>
            </div>
        </div>
    );
}

export default Todo;