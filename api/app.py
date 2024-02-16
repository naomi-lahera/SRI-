# import sys
import os
from querys_work import sri,csv_files

# # Obtén la ruta absoluta del directorio actual
# directorio_actual = os.path.dirname(os.path.abspath(__file__))

# # Define la ruta relativa al otro proyecto
# ruta_relativa_otro_proyecto = './SRI_News_Recomendation'
# print(ruta_relativa_otro_proyecto)

# # Convierte la ruta relativa en una ruta absoluta
# ruta_absoluta_otro_proyecto = os.path.join(directorio_actual, ruta_relativa_otro_proyecto)
# print

# # Agrega la ruta del otro proyecto al sys.path
# sys.path.append(ruta_absoluta_otro_proyecto)


from flask import Flask, jsonify, request
from news import New
from datetime import date
from flask_cors import CORS

app = Flask(__name__, template_folder='./templates')
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

@app.route('/api/search', methods=['GET'])
def get_news():
    url = request.args.get('url')
    source = request.args.get('source')
    print(f'url: {url}, source: {source}')
    [struc_new,scores] = sri(source,url)
    print(f'base: {struc_new.title}, associated_news: {len(scores)}')
    if url:
        return jsonify({'base': struc_new.serialize(),
                        'associated_news': [score.serialize() for score in scores]})
    return jsonify({'error': 'Missing query parameter'}), 400

@app.route('/api/get_sources', methods=['GET'])
def get_sources():
    return jsonify(csv_files)

# @app.route('/test_search')
# def test_search():
#     csv = [' '.join(word.capitalize() for word in os.path.splitext(file)[0].split('_')) for file in csv_files]
    
#     return jsonify(csv)

if __name__ == '__main__':
    app.run(debug=True, port=4000)