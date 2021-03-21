import data from './input.json';
import './App.css';
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {Tasks} from "./Tasks"
import data1 from './tb1.json';
import data2 from './tb2.json';
import data3 from './tb3.json';
import data4 from './cts.json';

const getHeader = () => {
    console.log(data1.tasks[0]._id);
    return (
        <tr>
            <th colSpan="1">Title</th>
            <th colSpan="1">Key</th>
            <th colSpan="1">Owner</th>
            <th colSpan="1">Category</th>
        </tr>
    );
}

const inside = (event) => {
    if (event.target.localName === "a") {
        document.getElementById(event.target.parentElement.parentElement.id).style.background = "grey";
    }
    else {
        document.getElementById(event.target.parentElement.id).style.background = "grey";
    }

}

const outside = (event) => {
    if (event.target.localName !== "a") {
        document.getElementById(event.target.parentElement.id).style.background = "white";    }
}

const boardID = (event) => {

}
const getTitle = () => {
    return <div className="table1">
        {getHeader()}
        {data.map(da => {
                const {_id, key, title, owner, category} = da;
                return (
                    <tr id={_id} >
                        <td id={title} onMouseEnter={inside} onMouseOut={outside}>
                            <a href={key} onMouseEnter={inside} onMouseOut={outside}>
                                {title}
                            </a>
                        </td>
                        <td id={key} onMouseEnter={inside} onMouseOut={outside}>{key}</td>
                        <td id={owner.name} onMouseEnter={inside} onMouseOut={outside}>{owner.name}</td>
                        <td id={category.value} onMouseEnter={inside} onMouseOut={outside}>{category.value}</td>
                    </tr>
                )
            }
        )}
    </div>
}
export const App = () => {
    return <div>
        <BrowserRouter>
            <Route path="/boards" component={getTitle}/>
            <Route path="/TB1" component={() => Tasks(data1)}/>
            <Route path="/TB2" component={() => Tasks(data2)}/>
            <Route path="/TB3" component={() => Tasks(data3)}/>
            <Route path="/CTS" component={() => Tasks(data4)}/>
        </BrowserRouter>
    </div>
}

export default App;
