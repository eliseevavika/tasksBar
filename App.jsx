var React = require('react');

var Column = require('./Column.jsx');


 class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: []
        };
        this.addList = this.addList.bind(this);
    };

    addList(item){
        var arr = this.state.taskList;
        arr.push({});
        this.setState({taskList: arr});
    }

    renderList(item){
        return(
            <Column title = {item}/>
        )
    }


    render(){
        return(
            <div>
                {this.state.taskList.map(item => this.renderList(item))}
                <button onClick = {this.addList} className = "btn new">Add a list...</button>

            </div>
        );
    }
}


module.exports = App;



