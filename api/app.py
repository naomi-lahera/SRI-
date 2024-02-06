from flask import Flask, render_template, jsonify
from news import news
app = Flask(__name__)

@app.route('/')
def index():
    # return render_template('index.html')
    return jsonify({"message":"Done"})

@app.route('/news/<string:new_url>', methods=['GET'])
def get_news(new_url):
    print(new_url)
    return jsonify(news)

if __name__ == '__main__':
    app.run(debug=True, port=4000)