from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/footlive')
def footlive():
    return render_template('footlive.html')  # Ensure this file exists in the /templates folder


@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json['message']
    
    # Fetching football tips and video links
    tips = fetch_football_tips(user_input)
    video = fetch_youtube_video(user_input)
    
    # Log the responses
    print(f"User Input: {user_input}")
    print(f"Tips: {tips}")
    print(f"Video: {video}")
    
    return jsonify({"tips": tips, "video": video})

def fetch_football_tips(query):
    # Placeholder for actual football tips fetch function
    return ["Tip 1: Stay updated on player injuries.", "Tip 2: Keep track of the transfer window."]

def fetch_youtube_video(query):
    api_key = ''  # Replace with your actual API key
    url = "https://www.googleapis.com/youtube/v3/search"
    
    params = {
        "part": "snippet",
        "q": query + " football highlights",
        "key": api_key,
        "maxResults": 1,
        "type": "video"
    }

    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            video_data = response.json()
            if video_data['items']:
                video_id = video_data['items'][0]['id']['videoId']
                return f"https://www.youtube.com/watch?v={video_id}"
            else:
                return "No video found."
        else:
            return f"Error: {response.status_code} - {response.text}"
    except requests.RequestException as e:
        return f"Error fetching video: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)