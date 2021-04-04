import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useFetch} from "../service/Fetch";

const GetHeader = () => {
    return (
        <tr>
            <th colSpan="1">Title</th>
            <th colSpan="1">Key</th>
            <th colSpan="1">Owner</th>
            <th colSpan="1">Category</th>
        </tr>
    );
}

export const BoardsPage = () => {
    const [dat, loading, error] = useFetch("/api/board");
    console.log(dat);
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    return <div className="table1">
        <GetHeader/>
        {dat.map(da => {
                const {_id, key, title, owner, category} = da;
                return (
                    <tr id={_id}>

                        <td id={title}>
                            <Link to={`/board/${key}`}>
                                {title}
                            </Link>
                        </td>

                        <td id={key}>{key}</td>
                        <td id={owner.name}>{owner.name}</td>
                        <td id={category.value}>{category.value}</td>
                    </tr>
                )
            }
        )}
    </div>
}