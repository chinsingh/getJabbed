// Release
const RELEASE_VERSION = 'v1.0.0'
const BIN_DOWNLOAD_URL = 'https://github.com/chinsingh/getJabbed/releases/download/'+ RELEASE_VERSION +'/GetJabbed.exe'


// Cowin API
const GET_STATES_URL = 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
const GET_DISTRICT_URL = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'
const GET_CENTERS_URL = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='


//DOM
const NAVBAR = document.getElementById("navbar")
const LOGO = document.getElementById("logo")
const READ_INSTRUCTIONS = document.getElementById('read-instructions')
const NAVBAR_COMPONENTS = document.getElementsByClassName('navbar-component')
const DOWNLOAD_BUTTON = document.getElementById('download-button')

const PHONE_NUMBER_CONTAINER =  document.getElementById('phone-number-container')
const PHONE_NUMBER = document.getElementsByClassName('phonenumber')

const STATES_DROPDOWN = document.getElementById('state-dropdown')
const DISTRICT_DROPDOWN = document.getElementById('district-dropdown')

const CENTER_DIV = document.getElementById('center-div')
const CENTER_COLUMNS = [
    document.getElementById('center-column1'),
    document.getElementById('center-column2'),
    document.getElementById('center-column3')
] 


const SELECT_CENTERS_INFO = document.querySelector('.alert-warning')