async function get_states(){
    let states_response = await fetch(GET_STATES_URL);
    let states_data = await states_response.json()
    return states_data;
}

async function get_district(state_id){
    let district_response = await fetch(GET_DISTRICT_URL + state_id);
    let district_data = await district_response.json()
    return district_data;
}

async function get_centers(district_id){
    let center_response = await fetch(GET_CENTERS_URL + district_id + '&date=' + get_today_date())
    let center_data = await center_response.json()
    return center_data;
}

function get_today_date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    return today;
}