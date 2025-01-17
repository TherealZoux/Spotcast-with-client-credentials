// store.js
import { createStore } from "vuex";
import {
  fetchcasts,
  fetchEpisodes,
  //fetchProfile,
} from "@/services/SpotifyService";

export default createStore({
  state: {
    shows: [],
    episodes: [],
    searchQuery: "",
    filteredShows: [],
    loading: true,
  },

  mutations: {
    SET_SHOWS(state, data) {
      state.shows = data;
      state.filteredShows = data; // Initialize filteredShows with the full list
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_EPISODES(state, data) {
      state.episodes = data;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_FILTERED_SHOWS(state, filteredShows) {
      state.filteredShows = filteredShows;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },

  },

  actions: {
    async fetchData({ commit }) {
      commit("SET_LOADING", true);
      try {
        if (localStorage.getItem("access_token")) {
          const data = await fetchcasts();
          commit("SET_SHOWS", data);
          if (data) { commit("SET_LOADING", true) }; // Handle the case where there's no token
        } else {
          commit("SET_LOADING", false); // Handle the case where there's no token
        }
      } catch (error) {
        console.error("Error fetching shows:", error);
        commit("SET_LOADING", false); // Ensure loading state is turned off on error
      } finally {
        commit("SET_LOADING", false); // Handle the case where there's no token

      }
    },
    async fetchEpisodes({ commit }, showId) {
      commit("SET_LOADING", true)
      try {
        const episodes = await fetchEpisodes(showId);
        commit("SET_EPISODES", episodes.items);
        commit("SET_LOADING", true)

      } catch (error) {
        console.error("Error fetching episodes:", error);
        commit("SET_LOADING", false)
      }
    },
    filterShows({ commit, state }) {
      const filteredShows = state.shows.filter((show) =>
        show.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
      commit("SET_FILTERED_SHOWS", filteredShows);
    },
    setSearchQuery({ commit, dispatch }, query) {
      commit("SET_SEARCH_QUERY", query);
      dispatch("filterShows");
    },
  },

  getters: {
    shows: (state) => state.shows,
    episodes: (state) => state.episodes,
    isLoading: (state) => state.loading,
    searchQuery: (state) => state.searchQuery,
    filteredShows: (state) => state.filteredShows,
    loading: (state) => state.loading,
  },
});
