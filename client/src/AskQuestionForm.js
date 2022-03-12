
import React from 'react';

const Form=() => {

       return (
          <form>
            <input 
            name="Title"
            placeholder="Title"
             onChange={e => this.change(e)}
            />
            <br />
              <textarea> Description </textarea>
             
             <br />
                <input 
                name="username"
                placeholder="Username" 
                onChange={e => this.change(e)}
             />
            
              
            <button className="button1"  onClick={e => this.onSubmit(e)}>Ask Question </button>

          </form>
        );

}


   export default Form;
    