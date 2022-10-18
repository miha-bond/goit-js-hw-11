import axios from 'axios';
import { params } from './params';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class PixabayAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  getFotos(searchQuery) {
    const baseURL = 'https://pixabay.com/api/';
    const body = params.toString();
    const URL = `${baseURL}?&${body}${searchQuery}`;
    console.log(URL);
    return fetch(URL).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
    // .then(data => {
    //   this.incrementPage();
    // });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
