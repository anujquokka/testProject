import { handleApiError } from "./error-handler";

import Axios from "./axios-wrapper";

const transformAxiosResponse = async _axios => await _axios.then(async res => await Promise.resolve(res.data)).catch(async err => await handleApiError(err.response));

const requestGetDelete = async (method, url, data, extras = {}) => await transformAxiosResponse(Axios.Client[method](url, data, extras));

const get = async (url, extras = {}) =>  await requestGetDelete("get", url, extras);


export default { get};
