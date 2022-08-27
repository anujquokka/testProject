import {get} from 'lodash';
import {http} from '../core';
import {URL} from './_urls.js';

const apiUserPostList = async ( ) => {
  const response = await http.get(URL.GET_USER_POST());
  if (response && response.status >= 400) {
    const errorMessage = get(response, 'data.message', '');
    throw new Error(errorMessage || 'Something went wrong!');
  }
  return response || null;
};


export {
  apiUserPostList,
}