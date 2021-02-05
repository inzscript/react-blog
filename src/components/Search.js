import React, { useState } from 'react';
import './../css/Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { subDays, addDays } from "date-fns";
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRange 
                ranges={[selectionRange]} 
                onChange={handleSelect} 
                months={2}
                direction="horizontal"
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 60)}
            />
            <h2>
                Number of Guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type='number' />
            <Button>Search irbnb</Button>
        </div>
    )
}

export default Search
