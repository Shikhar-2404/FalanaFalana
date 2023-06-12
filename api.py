from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/process-message', methods=['POST'])
def process_message():
    message = request.get_json().get('message', '')
    lowercase_message = message.lower()
    
    if lowercase_message in ['aloo', 'aaloo', 'aalloo', 'potato']:
        response = 'Peela'
    else:
        response = ''
        
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run()
