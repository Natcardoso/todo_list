import React, { useEffect, useState } from "react";
import * as s from "./style";
import moment from "moment";
import "moment/locale/pt-br";
import { AddNewTask } from "../AddNewTask";
import { ListTask } from "../ListTask";

export type TList = {
    text: string;
    checked: boolean;
    id: number;
};

//  { text: "comprar banana", checked: true },
//         { text: "comprar maça", checked: false },
export const TodoApp = () => {
    const dateNow = moment().format("dddd, DD MMM");
    const [list, setList] = useState<TList[]>([]);
    const activeList = list.length === 0 ? false : true;
    const [activeListState, setActiveListState] = useState<boolean>(activeList);

    const handleAddTask = (taskName: string) => {
        let newList = {
            id: Math.random(),
            text: taskName,
            checked: false,
        };

        setList([...list, newList]);
    };

    useEffect(() => {
        if (list.length === 0) {
            setActiveListState(false);
        }
    }, [list]);

    return (
        <s.Container>
            <s.Area activeList={activeListState}>
                <s.Header activeList={activeListState}>
                    <h1>Todo list</h1>
                    <p>{!activeListState && dateNow}</p>
                </s.Header>

                <AddNewTask
                    activeList={activeListState}
                    onEnter={handleAddTask}
                    setActiveListState={setActiveListState}
                />

                <s.ContainerAreaTask activeList={activeListState}>
                    <p>{list.length === 0 ? "" : dateNow}</p>
                    {list.map((item, index) => (
                        <ListTask
                            key={index}
                            setList={setList}
                            list={list}
                            item={item}
                            id={index}
                        />
                    ))}
                </s.ContainerAreaTask>
            </s.Area>
        </s.Container>
    );
};
