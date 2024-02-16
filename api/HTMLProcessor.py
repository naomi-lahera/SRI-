from newspaper import Article
import requests
from bs4 import BeautifulSoup
import re
from datetime import datetime
from class_News import News
    

class HTMLProcessor:
    
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

    def Process(self, url):

        # Crear un objeto Article con la URL
        article = Article(url)
        
        # Descargar y analizar el artículo
        article.download()
        article.parse()

        #Extraer el texto en crudo del HTML
        rawHTML : str = self.ExtractRawText(url)

        
        if rawHTML:
        
            date = article.publish_date

            if not date:
                date = self.Extract_dates_from_raw(rawHTML)

            author = self.Extract_author_from_raw(rawHTML)

            # Extraer el título y el texto
            title = article.title
            text = article.text
        
            return News(title, author, date, text,url)


    
    def ExtractRawText(self, url):
        # Realizar la solicitud GET a la URL
        response = requests.get(url)

        # Verificar si la solicitud fue exitosa (código 200)
        if response.status_code == 200:
            # Parsear el HTML de la página
            soup = BeautifulSoup(response.text, 'html.parser')

            # Obtener el texto del HTML
            text = soup.text

            # Escribir el texto en el archivo
            with open('html_content.txt', 'w', encoding='utf-8') as file:
                file.write(text)

            # Devolver el texto para otros usos
            return text
        else:
            # Imprimir un mensaje de error si la solicitud no fue exitosa
            print(f"Error al obtener la página. Código de estado: {response.status_code}")
            return None
        
    def Extract_author_from_raw(self, html):
        
        # Expresion regular para encontrar el autor
        author_pattern = r'"author"\s*:.*?"name"\s*:\s*"(.*?)"'

        match = re.search(author_pattern, html, re.DOTALL | re.IGNORECASE)

        if match:
            author = match.group(1)
            return author
        else:
            return None

    def Extract_dates_from_raw(self, html):
        # Expresiones regulares para identificar la fecha, se asume que la primera fecha en aparecer es la correcta
        date_pattern_1 = r'\b\d{1,2}(?:st|nd|rd|th)? (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b'
        date_pattern_2 = r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\. \d{1,2}, \d{4}\b'
        date_pattern_3 = r'\b(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}\b'
        date_pattern_4 = r'\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\b'
        
        # Los patrones combinados
        combined_pattern = f'({date_pattern_1}|{date_pattern_2}|{date_pattern_3}|{date_pattern_4})'
        
        dates = re.findall(combined_pattern, html, flags=re.IGNORECASE)

        # Simplemente transformar las fechas
        formatted_dates = []
        for date in dates:
            try:
                formatted_date = datetime.strptime(date, '%dth %B %Y').date()
            except ValueError:
                try:
                    formatted_date = datetime.strptime(date, '%b. %d, %Y').date()
                except ValueError:
                    try:
                        formatted_date = datetime.strptime(date, '%B %d, %Y').date()
                    except ValueError:
                        formatted_date = datetime.strptime(date, '%Y-%m-%dT%H:%M:%S.%fZ').date()
            if formatted_date:
                formatted_dates.append(formatted_date)

        # Devolver la primera
        try:
            result = formatted_dates[0]
        except:
            result = "Not Found"

        return result

def query_html_processor(url):
    # URL de ejemplo

    # Crear un objeto HTMLProcessor
    html_processor = HTMLProcessor()

    # Procesar la URL y obtener una estructura de noticias
    structured_new = html_processor.Process(url)
    # Imprimir los atributos de la estructura de noticias
    return [structured_new,f"{structured_new.get_title()} {structured_new.get_summary()}"]
