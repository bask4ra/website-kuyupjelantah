import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium_stealth import stealth
from bs4 import BeautifulSoup
import time
from langdetect import detect

# Konfigurasi Selenium Stealth
options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-blink-features=AutomationControlled")
service = Service('D:\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe')  # Sesuaikan dengan path chromedriver Anda

driver = webdriver.Chrome(service=service, options=options)

stealth(driver,
        languages=["en-US", "en"],
        vendor="Google Inc.",
        platform="Win32",
        webgl_vendor="Intel Inc.",
        renderer="Intel Iris OpenGL Engine",
        fix_hairline=True)

# Fungsi untuk memeriksa apakah teks dalam bahasa Inggris
def is_english(text):
    try:
        return detect(text) == "en"
    except:
        return False

# Fungsi untuk mengambil data dari satu halaman
def scrape_page(url):
    driver.get(url)
    time.sleep(3)  # Tunggu hingga halaman sepenuhnya dirender

    # Ambil HTML yang telah dirender oleh Selenium
    rendered_html = driver.page_source

    # Parsing dengan BeautifulSoup
    soup = BeautifulSoup(rendered_html, 'html.parser')

    # Mengambil semua judul
    titles = soup.select('.search-results__heading')

    # Mengambil semua keywords
    keywords_list = soup.select('.search-results__body')
    page_data = []
    for i, body in enumerate(keywords_list):
        # Mengambil elemen <ul> di dalam search-results__body untuk keywords
        keyword_elements = body.find("ul")
        if keyword_elements:
            keywords = [li.get_text(strip=True) for li in keyword_elements.find_all("li")]
        else:
            keywords = []

        # Simpan hanya judul dan kata kunci jika judul dalam bahasa Inggris
        title_text = titles[i].get_text(strip=True) if i < len(titles) else ""
        if is_english(title_text):
            article_data = {
                "title": title_text,
                "keywords": keywords
            }
            page_data.append(article_data)
    return page_data

# URL base
base_url = "https://doaj.org/search/articles?ref=homepage-box&source=%7B%22query%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22index.schema_codes_tree.exact%22%3A%5B%22LCC%3AR%22%5D%7D%7D%2C%7B%22query_string%22%3A%7B%22query%22%3A%22medicine%22%2C%22default_operator%22%3A%22AND%22%2C%22default_field%22%3A%22bibjson.keywords%22%7D%7D%5D%7D%7D%2C%22size%22%3A%22200%22%2C%22track_total_hits%22%3Atrue%7D"

# Iterasi halaman hingga mendapatkan 3000 artikel berbahasa Inggris
all_data = []
page = 0
try:
    while len(all_data) < 3000:
        print(f"Scraping page {page + 1}...")
        page_url = f"{base_url}&page={page}"
        page_data = scrape_page(page_url)

        if page_data:  # Hanya tambahkan data jika tidak kosong
            all_data.extend(page_data)  # Gabungkan data dari halaman ke data keseluruhan
        
        page += 1  # Iterasi ke halaman berikutnya

    # Batasi hanya 3000 artikel
    all_data = all_data[:3000]

    # Simpan ke file JSON baru
    with open("titles_and_keywords.json", "w", encoding="utf-8") as json_file:
        json.dump(all_data, json_file, ensure_ascii=False, indent=4)

    print("Scraping selesai. Data disimpan ke 'titles_and_keywords.json'.")
finally:
    driver.quit()
