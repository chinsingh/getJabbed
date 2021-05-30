function create_settings(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    settings = {};
    settings['phone_number'] = form.get('phonenumber')
    settings['district_id'] = form.get('district_id')
    
    for (i = 0; i < DISTRICT_DROPDOWN.length; i++) {
        option = DISTRICT_DROPDOWN.options[i];
        if (option.value == settings['district_id']) {
            settings['district_name'] = option.text;
        }
    }
    settings['state_id'] = form.get('state_id')
    settings['centers'] = form.getAll("centers[]");



    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "settings.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.setAttribute("href", "GetJabbed.exe");
    downloadAnchorNode.setAttribute("download", "GetJabbed.exe");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

  

    return false
}


