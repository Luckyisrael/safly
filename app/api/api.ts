import { Article } from "types";

const baseURL = 'https://newsapi.org';
const apiKey = '';

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const BASE_URL = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines';

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}?lang=en&media=True`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// You can add more API functions here as needed, for example:
export const fetchNewsByTopic = async (topic) => {
  try {
    const response = await fetch(`${BASE_URL}?lang=en&media=True&topic=${topic}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news by topic:', error);
    throw error;
  }
};