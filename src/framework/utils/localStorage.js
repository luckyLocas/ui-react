/**
 * 本地缓存
 * token:用户登录状态标识
 */

export const setStore = function (name, value) {
    if (!name) return;
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(name, value);
}

export const getStore = function (name) {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

export const removeStore = function (name) {
    if (!name) {
        window.sessionStorage.clear();
    } else {
        window.sessionStorage.removeItem(name);
    }
}