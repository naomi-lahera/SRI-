from flask import Flask, render_template, jsonify, request
from news import New
from datetime import date
from flask_cors import CORS
app = Flask(__name__, template_folder='./templates')
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

news = [
    New('Title 1', 'Summary 1', 'Author 1', date(2024, 3, 12), 'URL 1'),
    New('Title 2', 'Summary 2', 'Author 2', date(2024, 3, 12), 'URL 2'),
    New('Title 3', 'Summary 3', 'Author 3', date(2024, 3, 12), 'URL 3'),
]

@app.route('/api/search', methods=['GET'])
def get_news():
    url = request.args.get('url')
    source = request.args.get('source')
    requered_news = request.args.get('total')
    print('url, source, total')
    print(url, source)
    print(requered_news)
    # print('source')
    # print(source)
    # print('url')
    # print(url)
    # print('total')
    # print(requered_news)
    if url:
        # print(url)
        # print('json')
        # print([new.__dict__ for new in news])
        return jsonify({'base':  New('Title 1', 'Summary 1', 'Author 1', date(2024, 3, 12), 'URL 1').__dict__,
                        'associated_news': [new.__dict__ for new in news]})
    return jsonify({'error': 'Missing query parameter'}), 400

@app.route('/api/get_sources', methods=['GET'])
def get_sources():
    return(jsonify(['cnn', 'bbc', 'granma']))

if __name__ == '__main__':
    app.run(debug=True, port=4000)