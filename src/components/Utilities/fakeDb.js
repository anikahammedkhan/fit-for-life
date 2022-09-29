const addToDb = (props) => {
    let breakTime = { breakTime: props };
    localStorage.setItem('breaks', JSON.stringify(breakTime));
}

const getDb = () => {
    const breaks = JSON.parse(localStorage.getItem('breaks'));
    return breaks;
}
const loadDataFromDb = () => {
    let breaks = getDb();
    if (breaks) {
        return breaks;
    }
    return {};
}

export { addToDb, getDb, loadDataFromDb };