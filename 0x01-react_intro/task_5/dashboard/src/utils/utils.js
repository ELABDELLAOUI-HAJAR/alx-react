/*  function named getFullYear that
    will return the current year 
 */

function getFullYear() {
    const currentYear = new Date();
    return currentYear.getFullYear();
}

/*  function named getFooterCopy that
    will return a string depending on
    the value of the parameter isIndex
*/

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}


function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export { getFooterCopy, getFullYear, getLatestNotification };
