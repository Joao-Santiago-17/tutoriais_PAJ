let activityList = new Array();

window.onload = function() {
    if(localStorage.getItem('activitylist') !== null){
    activityList = JSON.parse(localStorage.getItem('activitylist'));
    let table = document.getElementById('activitytable');
    // Add rows to the table
    activityList.forEach(activity => {
    // create a row
    let row = table.insertRow();
    for (let key in activity) {
    // create a cell
    let cell = row.insertCell();
    cell.textContent = activity[key];
    }
    });
    }
    };   


    function addActivity(title, description){
        // generate new id for the new activity
        const id = activityList.length+1;
        // create an object of activity
        const newactivity = {activity_id: id ,activity_title: title, activity_description:
       description};
        // add the new activity into the array
        activityList.push(newactivity);
       
        // update the storage
        localStorage.setItem('activitylist',JSON.stringify(activityList));
        // add the activity in the table
        let table = document.getElementById('activitytable');
        // create a new row
        let row = table.insertRow();
        // create a new cell
        let cell = row.insertCell();
        cell.textContent = id;
        // create a new cell
        cell = row.insertCell();
        cell.textContent = title;
        // create a new cell
        cell = row.insertCell();
        cell.textContent = description;
       };