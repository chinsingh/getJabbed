from time import sleep

import requests

from resources import *
from cowin_auto import cowin

def main():
    slot_not_found = True
    switch = 0
    fail = False
    while slot_not_found:
        print('       Looking for vaccine slots', end="\r")
        status_code = 0
        while status_code !=200:
            response = requests.get(COWIN_API_URL, headers=HEADERS_DICT)
            status_code = response.status_code
            if status_code == 403:
                print('       High traffic! Unable to reach COWIN. Trying Again')
            elif status_code == 429:
                sleep(30)
            elif status_code !=200:
                print('       Unexepected API Error {}'.format(status_code))
                fail = True

        for center in response.json()['centers']:
            for center_id in CENTER_IDs:
                if center['center_id'] == int(center_id):
                    for session in center['sessions']:
                        if slot_not_found and session['available_capacity_dose1'] > 0 or session['available_capacity_dose2'] > 0:
                            print('       Slots available. Opening Co-WIN and Logging in')
                            slot_not_found = False
                            cowin()
        i=0
        while i < 120:
            if switch == 0:
                pattern = '>' if not fail else '!!!!' 
            elif switch == 1:
                pattern = '>>' if not fail else '!!!!'
            elif switch == 2:
                pattern = '>>>' if not fail else '!!!!'
            elif switch == 3:
                pattern = '>>>>' if not fail else '!!!!'
            else:
                pattern = '    '
            print('  {}'.format(pattern), end='\r', flush=True)    
            sleep(0.25)
            switch+=1
            if switch == 5:
                switch = 0
            i+=1
        fail = False

if __name__ == "__main__":
    main()