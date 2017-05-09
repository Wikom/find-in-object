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

    return (object && typeof object[key] !== 'undefined')
        ? object[key]
        : null;
};

export default findInObject;