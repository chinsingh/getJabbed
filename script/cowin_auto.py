from time import sleep
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from resources import *

def set_options(): 
    options = Options()
    options.add_argument("--disable-infobars")
    options.add_argument("start-maximized")
    options.add_argument("--disable-extensions")
    options.add_experimental_option("detach", True)
    return options


def get_driver():
    return webdriver.Chrome(ChromeDriverManager().install() , options = set_options())

def cowin():
    browser = get_driver()
    browser.get(COWIN_URL)
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, PHONE_NUMBER_INPUT)))
    browser.find_element_by_xpath(PHONE_NUMBER_INPUT).send_keys(PHONE_NUMBER)
    browser.find_element_by_xpath(NEXT_BUTTON).click()
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, OTP_INPUT)))
    sleep(1)
    otp_input = browser.find_element_by_xpath(OTP_INPUT)
    otp_input.click()
    length = 0
    while length < 6:
        length = len(otp_input.get_attribute("value"))
    browser.find_element_by_xpath(NEXT_BUTTON).click()
    WebDriverWait(browser, 300).until(EC.url_contains("dashboard"))
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, '//a[@href="/dashboard"]')))
    browser.execute_script("document.getElementsByClassName('m-lablename')[0].click()")
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, SEARCH_BY_DISTRICT)))
    browser.find_element_by_xpath(SEARCH_BY_DISTRICT).click()
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, SELECT_STATE)))
    browser.find_element_by_xpath(SELECT_STATE).click()
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, STATE)))
    browser.find_element_by_xpath(STATE).click()
    sleep(1)
    browser.find_element_by_xpath(SELECT_DISTRICT).click()
    WebDriverWait(browser, 300).until(EC.element_to_be_clickable((By.XPATH, DISTRICT)))
    browser.find_element_by_xpath(DISTRICT).click()
    browser.find_element_by_xpath(SEARCH_BUTTON).click()

