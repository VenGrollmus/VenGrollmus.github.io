/*==============================================================================

    Routines written by IT Solutions And Marketing

		Version V1.01 - 29 August 2016

 ==============================================================================

	Routine to write Copyright Year

	Parameters:
		year			Year to start Copyright information from.

		e.g.
            <script type="text/javascript">copyRightYear (2016);</script>
        or   
            <script type="text/javascript">copyRightYear ();</script>

		Note if no year is passed, or the year is greater than current year, then
		the copyright year will be the current year.

*/

function copyRightYear(beginYear) {

	var thisDate = new Date();
	var thisYear = thisDate.getFullYear();

    var startYear;

	if (beginYear === undefined) {
		startYear = thisDate.getFullYear();
	} else {
		startYear = beginYear;
	}

    // Display the copyright year.

	if (startYear == thisYear) {
		document.write("&copy; " + thisYear);
	}

	if (startYear < thisYear) {
		document.write("&copy; " + startYear + " - " + thisYear);
	}

	if (startYear > thisYear) {
		document.write("&copy; " + thisYear);
	}
}

/*==============================================================================

    Routine written by John Gardner - 2004

    See www.braemoor.co.uk/software for information about more freeware
    available.
		
		Version V01X02 - 1st May 2008
		                 updated to report "not available" if last modified date is
		                 not returned. This was true for Safari under Windows.

==============================================================================

Routine to write date document modified

   Parameters:
        time              True if time is to be displayed else False   

   e.g. 
        <script type="text/javascript">writeDateModified (false);</script>
   or   
        <script type="text/javascript">writeDateModified (true);</script>
        
   Note that if the server has failed to load up the HTTP header field with a 
   parsable date, nothing is written.
   
*/

function writeDateModified(time) {

    var days = new Array();                        // Array to hold day names
    var months = new Array();                      // Array to hold up month names

    // Load up day names
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";

    // Load up month names
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    // Assign date variables with document.lastModified 
    var modDate = new Date(Date.parse(document.lastModified));

    // If we have a valid date reformat it.
    if (modDate != 0 && modDate != "Invalid Date") {

    // Set up day variable to hold the name of the day
    var day = days[modDate.getDay()];

    // ndate variable holds day of month
    var ndate = modDate.getDate();

    // Set up month variable to hold the name of the month
    var month = months[modDate.getMonth()];

    // Get the year and if it is less than 1000 add 1900 to it.
    var year = modDate.getYear();
    if (year < 1000) year = year + 1900;

    // Load up the time variables if required
    if (time) {
        var hour = modDate.getHours().toString();
        if (hour.length == 1) hour = "0" + hour; 
            var minute = modDate.getMinutes().toString();
        if (minute.length == 1) minute = "0" + minute;
            var second = modDate.getSeconds().toString();
        if (second.length == 1) second = "0" + second;
    }

    // Display date and time document was last updated.
    document.write(day + " " + ndate + " " + month + " " + year+ "  ");
    if (time) {
            document.write(hour + ":" + minute + ":" + second);
        }
    } else {
        document.write("not available");
    }
}