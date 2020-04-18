import EventService from '@/services/EventService';
export const state = () => ({
	events: [],
	event: {},
	title: 'DEFAULT TITLE'
});
export const mutations = {
	SET_EVENTS(state, events) {
		state.events = events;
	},
	SET_EVENT(state, event) {
		state.event = event;
	},
	SET_TITLE(state, title) {
		state.title = title;
	}
};

export const actions = {
	fetchEvents({ commit }) {
		return EventService.getEvents().then((response) => {
			commit('SET_EVENTS', response.data);
		});
	},
	fetchEvent({ commit }, id) {
		return EventService.getEvent(id).then((response) => {
			commit('SET_EVENT', response.data);
		});
	},
	pushTitle({ commit }, title) {
		commit('SET_TITLE', title);
	}
};
