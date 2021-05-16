import {useQuery} from "react-query";
import {getBoardIcons, getCategoties} from "../../service/Fetch";
import React, {useState} from "react";
import "./styles.css"
import {useAuthSession} from "../../context/AuthContext";

export const CreateBoardPage = (props) => {

    const token = useAuthSession();
    console.log(token);


    const query = useQuery('CREATE_BOARD_DICT', () => {
        return Promise.all([getCategoties()(), getBoardIcons()()])
    });

    const [categories, icons] = query.data ?? [];

    console.log(categories);
    console.log(icons);

    // return (
    //     <div></div>
    // )

    const [form, setForm] = useState({
        title: "",
        key: "",
        category: categories === undefined ? [] : categories[0],
        icon: icons === undefined ? [] : icons[0]
    });

    const OnChangeTitle = (event) => {
        setForm(
            {...form, title: event.target.value}
        )
    }

    const OnChangeKey = (event) => {
        setForm(
            {...form, key: event.target.value.toUpperCase()}
        )
    }

    const OnChangeSelect = (event) => {
        setForm(
            {...form, category: JSON.parse(event.target.options[event.target.selectedIndex].value)}
        )
    }

    if (categories === undefined) {
        return <div>
            Loading
        </div>
    }
    return (
        <form onSubmit={(event) => props.onSubmit(form, event, icons[0])}>
            <tr>
                <td>
                    <div>
                        Title <br/>
                        <input name="title" onChange={OnChangeTitle} value={form.title}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        Key <br/>
                        <input name="key" onChange={OnChangeKey} value={form.key}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        Category <br/>
                        <select name="category" className="selectSize" onChange={OnChangeSelect}>
                            {categories.map(category => {
                                console.log(category);
                                return <option value={JSON.stringify(category)}>{category.value}</option>
                            })}
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <button type="submit" onClick={(event) => props.onSubmit(form, event, icons[0])}>Add</button>
                    </div>
                </td>
            </tr>
        </form>
    )
}