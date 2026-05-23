from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():

    return jsonify({
        "label": "FAKE",
        "confidence": 94.2
    })

if __name__ == '__main__':
    app.run(debug=True)