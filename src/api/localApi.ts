export const increaseProgression = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const progression = parseInt(localStorage.getItem('progression') || '0') + 1;
    if (parseInt(urlParams.get('index')) === progression) {
        localStorage.setItem('progression', progression.toString());
    }
    return progression;
};
