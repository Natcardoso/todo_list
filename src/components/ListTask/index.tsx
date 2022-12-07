import React, { useState } from "react";
import { TList } from "../TodoApp";
import * as s from "./style";
import { BiTrash } from "react-icons/bi";

type Props = {
    item: TList;
    index: number;
    setList: React.Dispatch<React.SetStateAction<TList[]>>;
    list: TList[];
};

export const ListTask = ({ item, index, setList, list }: Props) => {
    const [isChecked, setIsChecked] = useState(item.checked);

    const removeTask = () => {
        const itemRemove = list.filter((item, i) => {
            return i !== index;
        });
        console.log(itemRemove);
        setList(itemRemove);
    };

    return (
        <s.Task checked={isChecked}>
            <label className="container">
                <span>{item.text} </span>
                <input
                    type={"checkbox"}
                    checked={isChecked}
                    onChange={(e) => {
                        setIsChecked(e.currentTarget.checked);
                    }}
                />
                <span className="checkmark"></span>
            </label>
            <div className="iconRemove">
                <BiTrash size={20} onClick={() => removeTask()} />
            </div>
        </s.Task>
    );
};
