export class HistoryService {

    load() {
        const history = window.localStorage.getItem('history');
        if (history === null) {
            return [];
        } else {
            return JSON.parse(history);
        }
    }

    add(text) {
        let history = this.load();
        history = [text, ...history].slice(0, 5);
        window.localStorage.setItem('history', JSON.stringify(history));
        return history;
    }
}