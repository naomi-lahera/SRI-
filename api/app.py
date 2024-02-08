from flask import Flask, render_template, jsonify, request
from news import New
from flask_cors import CORS
app = Flask(__name__, template_folder='./templates')
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

news = [
    New('Title 1', 'Summary 1', 'Author 1', 'Date 1', 'URL 1'),
    New('Title 2', 'Summary 2', 'Author 2', 'Date 2', 'URL 2'),
    New('Title 3', 'Summary 3', 'Author 3', 'Date 3', 'URL 3'),
]

@app.route('/api/search', methods=['GET'])
def get_news():
    query = request.args.get('query')
    print('request.args')
    print(request.args)
    print('query')
    print(query)
    if query:
        print(query)
        print('json')
        print([new.__dict__ for new in news])
        return jsonify([new.__dict__ for new in news])
    return jsonify({'error': 'Missing query parameter'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=4000)