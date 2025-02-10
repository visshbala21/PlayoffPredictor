from bs4 import BeautifulSoup
import requests
import pandas as pd
wiki_url = 'https://en.wikipedia.org/wiki/NFL_playoff_results#All-time_playoff_records_(NFL/AFL)'
response = requests.get(wiki_url)
soup = BeautifulSoup(response.text,'html.parset')
