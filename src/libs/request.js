import axios from "axios"
import { loadProgressBar } from 'axios-progress-bar'
import useAxios from 'axios-hooks'

// export const REQUEST_URI = `https://${window.location.hostname}:4000/api`
// export const REQUEST_URI = '/api'
export const REQUEST_URI = ''

loadProgressBar()

const XHRDebug = (setting = false) => {
  if (setting === true) {
    axios.interceptors.request.use(
      (req) => {
        var data = req.method === 'get' ? req.params : req.data
        console.log(`Request method: '${req.method}', to ${req.url}, with data: ${JSON.stringify(data, true)}`)
        return req;
      },
      (err) => { return Promise.reject(err) }
    );

    axios.interceptors.response.use(
      (res) => {
        console.log(`Status: ${res.status}:${res.statusText} - Data: ${JSON.stringify(res.data, true)}`)
        return res;
      },
      (err) => { return Promise.reject(err) }
    );
  }
  else{
    axios.interceptors.request.use(
      (req) => { return req; }, (err) => { return Promise.reject(err) }
    );

    axios.interceptors.response.use(
      (res) => { return res; }, (err) => { return Promise.reject(err) }
    );
  }

}

export const XHR = async (method, url, userdata = null, debugSetting = false) => {
  XHRDebug(debugSetting)
  const auth = localStorage.getItem('auth') || null;
  return await axios({
    url, method, timeout: 10000,
    baseURL: REQUEST_URI,
    headers: { 'Authorization': auth ? `Bearer ${auth}` : undefined, },
    params: method === 'get' ? userdata : undefined,
    data: method !== 'get' ? userdata : undefined,
  })
}


export const useXHR = (method, url, userdata = null, debugSetting = false) =>{
  XHRDebug(debugSetting)
  const auth = localStorage.getItem('auth') || null;

  const [{ data, loading, error, response }, execute, manualCancel] = useAxios(
    {
      url, method, timeout: 10000,
      baseURL: REQUEST_URI,
      headers: { 'Authorization': auth ? `Bearer ${auth}` : undefined, },
      params: method === 'get' ? userdata : undefined,
      data: method !== 'get' ? userdata : undefined,
      withCredentials: true
    },
    { manual: true, useCache: false, autoCancel: false, ssr: false }
  )

  return{ data, response, loading, error, start: execute, cancel: manualCancel }
  //start({data: {}, params: {}})
}