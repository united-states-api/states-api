import requests
from bs4 import BeautifulSoup
import json
import sys

stateName = sys.argv[1]
url = 'https://en.wikipedia.org/wiki/' + stateName

page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')

raw_3 = soup.find_all('td')[3].find("div", class_="nickname").find_all(text=True, recursive=True)
c_3 = ''.join(raw_3).replace('\n', '')
raw_4 = soup.find_all('td')[4].find("div", class_="nickname").find_all(text=True, recursive=True)
c_4 = ''.join(raw_4).replace('\n', '')
raw_5 = soup.find_all('td')[5].find_all(text=True, recursive=True)[2].strip()
raw_7 = soup.find_all('td')[7].find_all(text=True, recursive=True)[0].strip()
raw_8 = soup.find_all('td')[8].find_all(text=True, recursive=True)[0].strip()
raw_9 = soup.find_all('td')[9].find_all(text=True, recursive=True)[0].strip()
raw_10 = soup.find_all('td')[10].find_all(text=True, recursive=True)[0].strip()
raw_11 = soup.find_all('td')[11].find_all(text=True, recursive=True)[0].strip()
raw_12 = soup.find_all('td')[12].find_all(text=True, recursive=True)[0].strip()
raw_13 = soup.find_all('td')[13].find_all(text=True, recursive=True)[0].strip()
raw_14 = soup.find_all('td')[14].find_all(text=True, recursive=True)[0].strip()
raw_15 = soup.find_all('td')[15].find_all(text=True, recursive=True)[0].strip()
raw_16 = soup.find_all('td')[16].find_all(text=True, recursive=True)[0].strip()
raw_17 = soup.find_all('td')[17].find_all(text=True, recursive=True)[0].strip()
raw_18 = soup.find_all('td')[18].find_all(text=True, recursive=True)[0].strip()
raw_19 = soup.find_all('td')[19].find_all(text=True, recursive=True)
c_19 = ''.join(raw_19).replace('\n', '')
raw_20 = soup.find_all('td')[20].find_all(text=True, recursive=True)
c_20 = ''.join(raw_20).replace('\n', '')
raw_21 = soup.find_all('td')[21].find_all(text=True, recursive=True)[0].strip()
raw_22 = soup.find_all('td')[22].find_all(text=True, recursive=True)[0].strip()
raw_23 = soup.find_all('td')[23].find_all(text=True, recursive=True)[0].strip()
raw_24 = soup.find_all('td')[24].find_all(text=True, recursive=True)[0].strip()
raw_25 = soup.find_all('td')[25].find_all(text=True, recursive=True)[0].strip()
raw_26 = soup.find_all('td')[26].find_all(text=True, recursive=True)[0].strip()
raw_27 = soup.find_all('td')[27].find_all(text=True, recursive=True)[0].strip()
raw_28 = soup.find_all('td')[28].find_all(text=True, recursive=True)[0].strip()
raw_29 = soup.find_all('td')[29].find_all(text=True, recursive=True)[0].strip()

raw_30 = soup.find_all('td')[30].find_all(text=True, recursive=True)[0].strip()
raw_31 = soup.find_all('td')[31].find_all(text=True, recursive=True)[0].strip()
raw_32 = soup.find_all('td')[32].find_all(text=True, recursive=True)[0].strip()
raw_33 = soup.find_all('td')[33].find_all(text=True, recursive=True)[0].strip()
raw_34 = soup.find_all('td')[34].find_all(text=True, recursive=True)[0].strip()
raw_35 = soup.find_all('td')[35].find_all(text=True, recursive=True)[0].strip()

raw_36 = soup.find_all('td')[36].find_all(text=True, recursive=True)[0].strip()

# symbols
# raw_50 = soup.find_all('td')[50].find_all(text=True, recursive=True)[0].strip()
# raw_51 = soup.find_all('td')[51].find_all(text=True, recursive=True)[0].strip()
# raw_52 = soup.find_all('td')[52].find_all(text=True, recursive=True)[0].strip()
# raw_53 = soup.find_all('td')[53].find_all(text=True, recursive=True)[0].strip()
# raw_54 = soup.find_all('td')[54].find_all(text=True, recursive=True)[0].strip()
# raw_55 = soup.find_all('td')[55].find_all(text=True, recursive=True)[2].strip()
# raw_55_1 = soup.find_all('td')[55].find_all(text=True, recursive=True)[5].strip()
# raw_56 = soup.find_all('td')[56].find_all(text=True, recursive=True)

# raw_57 = soup.find_all('td')[57].find_all(text=True, recursive=True)[0].strip()
# raw_58 = soup.find_all('td')[58].find_all(text=True, recursive=True)[0].strip()
# raw_59 = soup.find_all('td')[59].find_all(text=True, recursive=True)[0].strip()
# raw_60 = soup.find_all('td')[60].find_all(text=True, recursive=True)

print(json.dumps({
    "url": url,
    "state": stateName,
    "nickname": c_3,
    "motto": c_4,
    "anthem": raw_5,
    "country": raw_7,
    "territory": raw_8,
    "unionized": raw_9,
    "capital": raw_10,
    "largest_city": raw_11,
    "smallest_city": raw_12,
    "government_governor": raw_13,
    "government_lieutenant_governor": raw_14,
    "government_legislature": raw_15,
    "government_legislature_upper_house": raw_16,
    "government_legislature_lower_house": raw_17,
    "government_judiciary": raw_18,
    "government_us_senators": c_19.replace('\n', ''),
    "government_us_house": c_20,
    "area_total": raw_21,
    "area_land": raw_22,
    "area_water": raw_23,
    "area_rank": raw_24,
    "dimensions_length": raw_25,
    "dimensions_width": raw_26,
    "dimensions_highest_elevation": raw_28,
    "dimensions_lowest_elevation": raw_29,
    "population_total": raw_30,
    "population_rank": raw_31,
    "population_density": raw_32,
    "population_density_rank": raw_33,
    "population_median_household_income": raw_34,
    "population_income_rank": raw_35,
    "demonym": raw_36,

    # "demonym": raw_36
    # "living_insignia": {
    #     "bird": raw_50,
    #     "dog_breed": raw_51,
    #     "fish": raw_52,
    #     "flower": raw_53,
    #     "insect": raw_54,
    #     "mammal": {
    #         "land": raw_55,
    #         "marine": raw_55_1
    #     },
    #     "tree": raw_56
    # },
    # "inanimate_insignia": {
    #     "fossil": raw_57,
    #     "gemstone": raw_58,
    #     "mineral": raw_59,
    #     "other": raw_60
    # }
}))