async function loadFromStore(event) {
    event.preventDefault();
    
    lastRoutine = JSON.parse(localStorage.getItem('lastRoutine'));
    lastRoutineName = JSON.parse(localStorage.getItem('lastRoutineName'));
    
};
loadFromStore();

data = JSON.parse(localStorage.getItem('key'));parse