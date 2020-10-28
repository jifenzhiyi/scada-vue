export const NODE_ENV = process.env.NODE_ENV || 'development';

export const API_LIST = {
  dev: 'http://192.168.188.11:9132/malu-superuser/', // cdyq
  prod: `${window.location.origin}/malu-superuser/`,
};

export const END_POINT = API_LIST[NODE_ENV];
