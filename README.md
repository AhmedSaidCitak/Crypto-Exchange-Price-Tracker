# Prerequisites

Before you begin, make sure you have the following installed:

**Python**: Some of the parts in this project are written in python 3.7. So, make sure you have match that version or higher.

**Flask**: This project is using Flask web application framework. So, it is necessary to run the application.

**requests**: This is a Python HTTP library that is used in project.

Python installation for **Ubuntu/Unix** in command line:
```
sudo apt install python3.7 
```
Flask installation using pip:
```
pip install flask
```
requests library installation using pip:
```
pip install requests 
```
# Run the Application

Navigate the directory containing your **app.py** file and run following command:
```
python app.py
```
# Access the Application

Open a web browser and go to the URL indicated in your command promt or terminal, usually:
```
http://127.0.0.1:5000/
```
This will load your application hosted locally on your machine.

# Project Content
### 1. Backend Development:
- [x] Develop a Python script to fetch cryptocurrency prices from an exchange (Binance) using its respective API.
- [ ] Store the retrieved data in a MySQL database.
- [x] Implement basic error handling for API requests.
### 2. Frontend Development:
- [x] Create a simple HTML page to display the cryptocurrency prices fetched from the backend.
- [x] Design the page using basic CSS to make it visually appealing.
- [x] Display the prices in a table format, with columns for cryptocurrency name, price, and exchange.
### 3. Funcionality:
- [x] Allow users to select the cryptocurrencies they want to track.
- [x] Provide a dropdown menu or input field for users to select the exchanges they want to compare.
- [x] Ensure that the prices are updated periodically (every 30 seconds) without requiring a page
refresh.
### 4. Deployment:
- [x] Deploy the web application on a local server for testing purposes.
- [x] Provide instructions on how to run the application locally.
### 5. Bonus:
- [ ] Implement user authentication to allow users to save their preferred cryptocurrency and exchange
selections.
- [x] Add responsiveness to the design, making it suitable for viewing on different devices.
- [ ] Fetch cryptocurrency prices from multiple exchanges.
