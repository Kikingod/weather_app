import requests
from bs4 import BeautifulSoup as bs
import json


def info1():
    list_data = []
    url = requests.get('https://www.meteocentrum.cz/')
    soup = bs(url.content, features="html.parser")
    ul = soup.find_all('ul', class_='weather-tabs')
    path = str(ul[0])
    l = path.split('</li>')
    for x in range(0,len(l)-1):
        list_data.append(element(l, x))
    return list_data
def element(l, x):
    element_soup = bs(l[x], features="html.parser")
    div = element_soup.find('div', class_='weather-tab-date').text
    celsium_high = element_soup.find('span', class_='weather-tab-degrees-primary').text  # maximum temperature
    celsium_low = element_soup.find('span', class_='weather-tab-degrees-secondary').text  # lower temperature
    return div, celsium_low[1:], celsium_high

data = info1()

with open('weather_app/data2.json', 'w') as f:
    json.dump(data, f)

with open('weather_app/data2.json','r') as f:
    data1 = json.load(f)
    print(data1)