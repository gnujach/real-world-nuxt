import axios from 'axios';
const apiClient = axios.create({
	baseURL: `http://my-json-server.typicode.com/Code-Pop/real-world-nuxt/`,
	whithCredentials: false,
	headers: {
		Accepts: 'Application/json',
		'Content-type': 'application/json'
	}
});
export default {
	getEvents() {
		return apiClient.get('/events');
	},
	getEvent(id) {
		return apiClient.get('/events/' + id);
	}
};
