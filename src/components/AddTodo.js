import React from 'react';

function AddTodo({handleChange, addTodoItem, value}){
 return(
    <div className="row mt-1">
        <div className="col-sm-8 sm-offset-2 mx-auto">
            <div className="input-group mt-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add todo..." 
                    aria-label="Add todo" 
                    aria-describedby="button-addon2"
                    onChange={handleChange} 
                    value={value}
                />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-primary" 
                        type="button" 
                        id="button-addon2"
                        onClick={addTodoItem}
                    >Add Todo
                    </button>
                </div>
            </div>
        </div>
    </div>
 );
}

export default AddTodo;