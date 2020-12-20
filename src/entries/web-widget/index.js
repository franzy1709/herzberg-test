import initAt from './widget-api/init-at';

const supportedAPI = new Map([
  ['init-at', initAt]
])

export function webWidget(window){
  let globalObject = window[window['HerzbergWebWidget']];
  let queue = globalObject.q;
  if (queue) {
    for (var i = 0; i < queue.length; i++) {
        // if (queue[i][0].toLowerCase() == 'init-at') {
        //   console.log('Herzberg-Widget-Api started');
        //     // configurations = extendObject(configurations, queue[i][1]);
        // }
        // else
            apiHandler(window, ...queue[i]);
    }
  }

  globalObject = apiHandler.bind(null, window);
}

function apiHandler(window, api, ...params) {
  if (!api) throw Error('API method required');
  api = api.toLowerCase();

  const apiFn = supportedAPI.get(api);

  if (typeof apiFn !== 'function') throw Error(`Method ${api} is not supported`);

  console.log(`Handling API call ${api}`, params);
  apiFn.call(null, window, ...params);
}

webWidget(window);