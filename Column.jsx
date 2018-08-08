var React = require('react');

var Task = require('./Task.jsx');



 class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: [],
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    addList(text){
        var arr = this.state.task;
        arr.push(text);
        this.setState({task: arr});
    };


    handleChange(event) {
        this.setState({value: event.target.value});
    };

    handleSubmit(event) {
        this.setState({title: this.state.value});

        event.preventDefault();
        
    };

    removeList(){

    };

    render(){
        var title = this.state.title;
        if(title!=""){
            return(
                <div className = "box">
                    <Task title={this.state.title} />
            </div>
            )
        }else{
            return(
                <div className = "box">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                           <input type="text" value={this.state.value} onChange={this.handleChange} />
                            
                            <p className="error">give me a name!</p>
            </label>
            </form>
            </div>
            )
        }
    }
}

module.exports = Column;