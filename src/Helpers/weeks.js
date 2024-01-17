

/**
 * Maps a list of days into a list of lists of days
 * where each sublist is the week the day was in
 * */ 

export const daysToWeeks = (dates) => {
    // 1. Get day of week
    // 2. 1f weeeks array is empty or if day of week is 0 create new array and push date
    //    into it.
    // 3. If day of week is greater than zero, push date string into
    //    days list at the top of the week list

    const weeks = [];

    for(let date of dates) {
        const dayOfWeek = new Date(date).getDay();
        if(weeks.length === 0 || dayOfWeek === 0) {
            weeks.push([ date ]);
        } else {
            weeks[weeks.length - 1].push(date);
        }
    }

    return weeks;
}

