from flask import Flask, jsonify, request, send_from_directory
import requests

app = Flask(__name__, static_folder='../frontend', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/prices', methods=['POST'])
def get_prices():
    symbols = request.json['symbols']
    prices_data = [fetch_current_price(symbol) for symbol in symbols if fetch_current_price(symbol) is not None]
    return jsonify(prices_data)

def fetch_current_price(symbol):
    url = f'https://api.binance.com/api/v3/ticker/price?symbol={symbol}'
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print('Error fetching current price:', e)
        return None

if __name__ == '__main__':
    app.run(debug=True)
