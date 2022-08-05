import { AxiosRequestConfig } from "axios";
import qs from 'qs'
export const tokens = new Map();

export const getKey = (config: AxiosRequestConfig): string => [config.url, config.method, qs.stringify(config.params), qs.stringify(config.data)].join("&")

export const add = (config: AxiosRequestConfig) => {
  const pendingKey = getKey(config);
  if (config.signal) {
    config.signal = config.signal
  } else {
    const Controller = new AbortController()
    config.signal = Controller.signal
    if (!tokens.has(pendingKey)) {
      tokens.set(pendingKey, Controller);
    }
  }


}
export const remove = (config: AxiosRequestConfig) => {
  const pendingKey = getKey(config);
  if (tokens.has(pendingKey)) {
    const cancelToken = tokens.get(pendingKey);
    cancelToken.abort();
    tokens.delete(pendingKey);
  }
}

export const removeAll = () => {
  tokens.forEach((value, key) => {
    const cancelToken = tokens.get(key);
    cancelToken.abort();
    tokens.delete(key);
  });
}
