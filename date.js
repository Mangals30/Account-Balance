    
    const getMonth = num => {
        let month = ''
        switch (num) {
            case 0:
                month = 'Jan'
                break;
            case 1:
                month = 'Feb'
                break;
            case 2:
                month = 'Mar'
                break;
            case 3:
                month = 'Apr'
                break;
            case 4:
                month = 'May'
                break;
            case 5:
                month = 'Jun'
                break;
            case 6:
                month = 'Jul'
                break;
            case 7:
                month = 'Aug'
                break;
            case 8:
                month = 'Sep'
                break;
            case 9:
                month = 'Oct'
                break;
            case 10:
                month = 'Nov'
                break;
            case 11:
                month = 'Dec'
                break;    
            default:
                month ='NoMonth'
                break;
        }
        return month
    }

    
    const dateToday = () => {
        const today = new Date()
        let monthNum = today.getMonth()
        let month = getMonth(monthNum)
        let date = today.getDate()
        let year = today.getFullYear()
        let hours = today.getHours()
        let minutes = today.getMinutes()
        return (`${month} ${date}, ${year} ${hours}:${minutes}`)
         
    }
    