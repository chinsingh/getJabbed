# Get Jabbed
Get Jabbed is an application which can help you in booking the vaccine by checking for slots continuously and opening COWIN as soon as its available.

#### What is it not
It is NOT a replacement or an alternative to COWIN.  

## How it works
You enter your details on the website to create the settings for the application. Once you're done, you click the download button which will download the app along with the settings. When you run the app, it will keep checking continuously for slots availability for the centers you have selected. As soon as the slots become available, it will open up the browser and take you straight to the booking screen. You just have to enter the OTP once.

### Prerequisites
* An account on COWIN with at least one member registered
* PC or mac (the website will provide you with an exe file which you'll have to run from your laptop or desktop. There's no point accessing the website from the phone and that is why its not designed for phone browsers)
* [Google Chrome](https://www.google.com/intl/en_in/chrome/) browser


## Intial Steps
1. On the [website](https://get-jabbed.herokuapp.com/), enter your phone number, state and district.
2. Select the centers for which you want to book the slots for (for example, centers near you)
3. Click the download button to get the application. 
4. When prompted, please allow multiple downloads so that both the app and settings could be downloaded.

**NOTE: Always keep the .exe file and settings.json together in the same folder**


## Usage
1. Run the GetJabbed.exe file at the time when slots usually open daily or whenever you want it to look for slots. 
2. When it detects the slot, it will open up the broswer and log you in. You just need to enter the OTP once.
3. After entering the OTP it will take you to the booking screen from where you can select the slot and make the booking.

*Tip: Keep your phone nearby even if you leave the app running on your desktop. Once you receive the OTP, you'll know a slot has been found.*

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

You can also [report a bug, request a feature](https://github.com/chinsingh/getJabbed/issues/new/choose) or [email me](mailto:mr.chinmaysingh.gmail.com).

## Credits
This project was made possible by the [COWIN API](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#).

## Donations
Please [consider donating](https://www.pmcares.gov.in/en/) to the COVID relief fund of your choice.

## License
[MIT](https://github.com/chinsingh/getJabbed/blob/master/LICENSE.md)
