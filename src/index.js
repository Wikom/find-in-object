/**
 * Created by rouven on 11.04.17.
 */

const findInObject = (/*string*/key, /*Object*/object) => {
    if (object == null || key == null) {
        return null;
    }
    const keyParts = key.split('.');

    if (keyParts.length > 1) {
        const newObject = object[keyParts.shift()];
        return findInObject(keyParts.join('.'), newObject);
    }
    if (object) {
        return object[key] || null;
    }

    return null;
};

export default findInObject;