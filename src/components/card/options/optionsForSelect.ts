export const yearOptions = generateYears()
export const monthOptions = generateMonths();

function generateYears():object[]{
    let currentDate = new Date()
    let currentYear:number = currentDate.getFullYear();
    let years: object[] = []
    for(let i =0; i< 20; i++){
        years.push({
            value: currentYear+i,
            label: currentYear+i
        })
    }
    return years;
}

function generateMonths():object[]{
   let months:object[]= []
    for(let i = 1; i<12; i++){
        months.push({
            value: i,
            label: i
        })
    }

    return months
}