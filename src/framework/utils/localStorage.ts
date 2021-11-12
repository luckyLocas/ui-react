/**
 * 本地缓存
 * token:用户登录状态标识
 */

export const setStore = function (name: string, value: any) {
  if (!name) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(name, value);
}

export const getStore = function (name: string) {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}

export const removeStore = function (name: string) {
  if (!name) {
    window.sessionStorage.clear();
  } else {
    window.sessionStorage.removeItem(name);
  }
}