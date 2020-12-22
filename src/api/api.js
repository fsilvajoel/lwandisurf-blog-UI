import React from 'react'
import axios from 'axios'

const defaultOptions = {
	baseURL: 'http://localhost:8000',
	headers: {
		'Content-Type': 'application/json'
	}
};

const instance = axios.create(defaultOptions);

const response = instance.post('/api-auth', {
	"username": "admin",
	"password": "teste123"
});

console.log(response)

export default instance;