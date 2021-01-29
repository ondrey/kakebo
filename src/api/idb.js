const DB_NAME = 'kakebo';
const DB_VERSION = 1;
let DB;

export default {

    async getDb() {
        return new Promise((resolve, reject) => {

            if(DB) { return resolve(DB); }
            console.log('OPENING DB', DB);
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);
            
            request.onerror = e => {
                console.log('Error opening db', e);
                reject('Error');
            };
    
            request.onsuccess = e => {
                DB = e.target.result;
                resolve(DB);
            };
            
            request.onupgradeneeded = e => {
                let db = e.target.result;
				db.createObjectStore("plans", { autoIncrement: true, keyPath:'id_plan' });
				db.createObjectStore("categories", { autoIncrement: true, keyPath:'id_cat' });
				db.createObjectStore("payments", { autoIncrement: true, keyPath:'id_pay' });
				db.createObjectStore("savings", { autoIncrement: true, keyPath:'id_saving' });
            };
        });
    },
    async delete(objname, id) {
        

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([objname],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(objname);
            store.delete(id);
        });    
    },
    async get(objname) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([objname],'readonly');
            trans.oncomplete = () => {
                resolve(cats);
            };
            
            let store = trans.objectStore(objname);
            let cats = [];
            
            store.openCursor().onsuccess = e => {
                let cursor = e.target.result;
                if (cursor) {
                    cats.push(cursor.value)
                    cursor.continue();
                }
            };

        });
    },

    async save(objname, obj) {

        let db = await this.getDb();

        return new Promise(resolve => {

            let trans = db.transaction([objname],'readwrite');
            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(objname);
            store.put({...obj, created: new Date(), sinc:false});

        });
    
    }

}