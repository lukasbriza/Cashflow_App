import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react"

import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker(props: { setDate: React.Dispatch<React.SetStateAction<Date>> }) {

    const [date, setDate] = useState(new Date());
    const [focused, setFocused] = useState<boolean>(false)

    useEffect(() => {
        props.setDate(date)
    }, [date, props])

    return (
        <div className="dataHandler"
            data-focused={focused}
        >
            <DatePicker
                selected={date}
                onChange={(date: Date) => setDate(date)}
                onClickOutside={() => { setFocused(false) }}
                onFocus={() => { setFocused(true) }}
            />
        </div>
    );
}

export { MyDatePicker }