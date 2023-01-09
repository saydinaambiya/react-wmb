export const onChangeText = (callback) => (e) => {
    callback(e.target.value);
}

export const onChangeTexts = (name, callback) => (e) => {
    callback((prevData) => ({
        ...prevData,
        [name]: e.target.value
    }))
}