get_states().then(states_data=>{
    states_data.states.forEach(state => {
        STATES_DROPDOWN.innerHTML += '<option value="' + state.state_id+ '">' + state.state_name + '</option>'
    });
})

STATES_DROPDOWN.onchange = ()=>{
    state_id = STATES_DROPDOWN.value
    if(state_id){
        DISTRICT_DROPDOWN.disabled = false
        DISTRICT_DROPDOWN.innerHTML = '<option selected value="0">Select your district</option>'
        get_district(state_id).then(district_data=>{
            district_data.districts.forEach(district => {
                DISTRICT_DROPDOWN.innerHTML += '<option value="' + district.district_id + '">' + district.district_name + '</option>'
            });
        })
    }
}

DISTRICT_DROPDOWN.onchange = ()=>{
    district_id = DISTRICT_DROPDOWN.value
    if(district_id != 0){
        CENTER_COLUMNS.forEach(center_column => {
            center_column.innerHTML = ''
        })
        SELECT_CENTERS_INFO.style.visibility = 'visible'
        scroll_function()
        get_centers(district_id).then(center_data=>{
            center_count = center_data.sessions.length
            center_per_column = Math.round(center_count/3)
            i = 0
            CENTER_COLUMNS.forEach(center_column => {
                for (j = 0, k=i; j < center_per_column && i < center_count ; j++) {
                    center_column.innerHTML += `<div class="form-check mt-5">
                                                    <input class="btn-check" type="checkbox" name="centers[]" id="flexCheckDefault`+ k +'" value="' + center_data.sessions[k].center_id + '">'
                                                    + `<label class="btn shadow-sm card-body" style="width: 18rem;" for="flexCheckDefault`+ k + '">'
                                                    + `<h6 class="card-title">`+ center_data.sessions[k].name + '  <span class="badge bg-light text-dark">'+center_data.sessions[k].fee_type+'</span></h6><p class="card-text">'+ center_data.sessions[k].address + ', ' + center_data.sessions[k].pincode +'</p></label></div>'                               
                    k++
                    i++
                }                
            });
        })
    }
}


CENTER_DIV.onclick = ()=>{
    DOWNLOAD_BUTTON.style.visibility = 'visible'
}

document.getElementById('form').addEventListener('submit', e=>create_settings(e));