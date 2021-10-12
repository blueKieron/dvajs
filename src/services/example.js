import request from '../utils/request';
const PROXY_BASE = '/apis'

export function query() {
  return request('/api/users');
}

export function getExample() {
  return request(PROXY_BASE + '/api/v1/topics');
}

//mock
export function getMock() {
  return request('/api/mocks');
}
