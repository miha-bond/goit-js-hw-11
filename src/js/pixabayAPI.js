import axios from 'axios';
import { params } from './params';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class pixabayAPI {
  constructor() {
    this.pageCounter = 1;
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
  }

  setQuery(newQuery) {
    params.set('q', newQuery);
  }

  getPageCounter() {
    return this.pageCounter;
  }

  resetPage() {
    params.set('page', '1');
  }

  incrementPage() {
    this.pageCounter += 1;
    params.set('page', this.pageCounter);
  }
}
