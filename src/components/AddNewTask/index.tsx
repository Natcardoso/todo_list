import React, { useState } from "react";
import * as s from "./style";
import { GoPlusSmall } from "react-icons/go";

type Props = {
    onEnter: (taskName: string) => void;
    activeList: boolean;
    setActiveListState: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AddNewTask = ({
    onEnter,
    activeList,
    setActiveListState,
}: Props) => {
    const [textInput, setTextInput] = useState("");
    const [openInput, setOpenInput] = useState(false);

    const handleOnKeyUp = (e: { code: string }) => {
        if (e.code === "Enter" && textInput) {
            onEnter(textInput);
        } else {
            return;
        }
        setTextInput("");
        setOpenInput(false);
        setActiveListState(true);
    };

    return (
        <s.Container>
            <s.Button
                type="button"
                onClick={() => setOpenInput(true)}
                className={activeList ? "styleButtonActiveList" : ""}
                id={openInput ? "buttonConfirm" : ""}
            >
                <div>
                    <GoPlusSmall size={20} />
                </div>
            </s.Button>
            {openInput && (
                <s.ContainerInput>
                    <s.Input
                        autoFocus
                        type={"text"}
                        placeholder={"Add Item"}
                        value={textInput}
                        onKeyUp={handleOnKeyUp}
                        onChange={(e) => setTextInput(e.currentTarget.value)}
                    />
                </s.ContainerInput>
            )}
        </s.Container>
    );
};
