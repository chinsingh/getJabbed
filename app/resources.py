import json
from datetime import datetime

# From settings.json
settings = json.load(open('settings.json'))

PHONE_NUMBER = settings['phone_number']
CENTER_IDs = settings['centers']
DISTRICT_ID = settings['district_id']
DISTRICT_NAME = settings['district_name']
STATE_ID = settings['state_id']


#URLs
COWIN_URL = 'https://selfregistration.cowin.gov.in/'
COWIN_API_URL = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id={}&date={}'.format(DISTRICT_ID, datetime.now().strftime("%d-%m-%Y"))


#Xpaths
PHONE_NUMBER_INPUT = '//input[@placeholder="Enter your mobile number"]'
NEXT_BUTTON = '//ion-button[@type="button"]'
OTP_INPUT = '//input[@placeholder="Enter OTP"]'
SEARCH_BY_DISTRICT = '//div[@data-checked="Search By District"]'
SELECT_STATE = '//mat-select[@formcontrolname="state_id"]'
SELECT_DISTRICT = '//mat-select[@formcontrolname="district_id"]'

STATE = '//mat-option[@id="mat-option-{}"]'.format(STATE_ID)
DISTRICT = '//mat-option/span[contains(.,"' + DISTRICT_NAME + '")]'
SEARCH_BUTTON = '//ion-button'

HEADERS_DICT = {
    "Accept-Language": "hi_IN",
    "sec-ch-ua-mobile": "?0",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document"
}