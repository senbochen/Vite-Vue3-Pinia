import { AxiosRequestConfig } from "axios";
import qs from 'qs'
export const tokens = new Map();
interface Config extends AxiosRequestConfig {
  [key: string]: any
}


export const getKey = (config: Config): string => [config.url, config.method, qs.stringify(config.params), qs.stringify(config.data)].join("&")

export const add = (config: Config) => {
  const pendingKey = getKey(config);
  if (config.signal) {
    config.signal = config.signal
  } else {
    const Controller = new AbortController()
    config.signal = Controller.signal
    if (!tokens.has(pendingKey) && config?.type !== 'form-data') {
      tokens.set(pendingKey, Controller);
    }
  }


}
export const remove = (config: Config) => {
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
