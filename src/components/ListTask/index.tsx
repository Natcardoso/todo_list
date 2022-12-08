import React, { useState } from "react";
import { TList } from "../TodoApp";
import * as s from "./style";
import { BiTrash } from "react-icons/bi";

type Props = {
    item: TList;
    id: number;
    setList: React.Dispatch<React.SetStateAction<TList[]>>;
    list: TList[];
};

export const ListTask = ({ item, id, setList, list }: Props) => {
    const removeTask = () => {
        const itemRemove = list.filter((item, i) => {
            return i !== id;
        });
        setList(itemRemove);
    };

    const toggleChecked = (id: number, check: boolean) => {
        const itemChecked = list.findIndex((task) => task.id === id);
        const newList = list;
        newList[itemChecked].checked = check;
        setList([...newList]);
    };

    return (
        <s.Task checked={item.checked}>
            <label className="container">
                <span>{item.text} </span>
                <input
                    type={"checkbox"}
                    checked={item.checked}
                    onChange={(e) =>
                        toggleChecked(item.id, e.currentTarget.checked)
                    }
                />
                <span className="checkmark"></span>
            </label>
            <div className="iconRemove">
                <BiTrash size={20} onClick={() => removeTask()} />
            </div>
        </s.Task>
    );
};
