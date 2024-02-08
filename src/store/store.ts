import { defineStore } from 'pinia'
import axios from 'axios'
import type State from '../types/state'

export const useStore = defineStore('store', {
  state: (): State => ({
    tvShows: [],
  }),

  actions: {
    async fetchTvShows() {
      try {
        const response = await axios({
          url: 'https://api.tvmaze.com/shows',
          method: 'GET',
        })
        if (response) {
          this.tvShows = response.data
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
})
