/** 
 * @author @ovbml
 * @version 1.0
*/
let hrefTools = {
    /* service methods and properties */
    init() {
        this.properties.parent = this;
        this.search.parent = this;
        this.hash.parent = this;
        return this;
    },
    firstSymbol(str, symbol) {
        // convert to the str type
        str += '';
        symbol += '';

        // checking
        if (str !== '' && !str.startsWith(symbol))
            return symbol + str;
        return str;
    },

    properties: {
        /* setters */
        set href(value) {
            history.pushState('', '', value);
        },
        set search(value) {
            this.href = location.origin + location.pathname +
                        this.parent.firstSymbol(value, '?') + location.hash;
        },
        set hash(value) {
            this.href = location.origin + location.pathname +
                        location.search + this.parent.firstSymbol(value, '#');
        },

        /* getters */
        get href() {
            return location.href;
        },
        get search() {
            return location.search;
        },
        get hash() {
            return location.hash;
        }
    },

    /* main methods */
    search: {
        from(obj) {
            let search = {};

            // for delete "?" from obj[0] element if it is an array
            if (obj instanceof Array)
                obj = obj.join('&');
            else if (typeof obj === 'object')
                return obj;

            // conver to the str type
            obj += '';
            // delete "?" if starts with
            if (obj.startsWith('?'))
                obj = obj.slice(1);
            // split search items by "&"
            obj = obj.split('&');

            for (let item of obj) {
                item = item.split('=');
                if (item.length === 1)
                    search[item[0]] = true;
                else
                    search[item[0]] = item[1];
            }

            return search;
        },
        toStr(obj) {
            let search = [];
            for (let prop in obj) {
                let value = obj[prop];

                if (value === true)
                    search = search.concat(prop);
                else
                    search = search.concat(`${prop}=${value}`);
            }
            return search.join('&');
        },
        get() {
            return this.from(location.search);
        },
        set(value) {
            if (typeof value === 'string') {
                this.parent.properties.search = value;
            } else if (typeof value === 'object') {
                this.parent.properties.search = this.toStr(
                    this.from(value)
                );
            } else
                return false

            return location.search;
        },
        clear() {
            this.set('');
        },
        update(value) {
            value = this.from(value);
            if (value[""] === true)
                return false;
            return this.set( Object.assign(this.get(), value) );
        },
        del(...propList) {
            let deleted = {},
                search = this.get();

            for (let prop of propList) {
                deleted[prop] = search[prop];
                delete search[prop];
            }
            this.set(search);
            return deleted;
        },
        toggle(prop) {
            let value = this.get()[prop];
            if (!!value && value !== 'false') {
                this.update(`${prop}=false`);
                return false;
            }
            // else
            this.update(`${prop}`);
            return true;
        },
    },

    hash: {
        get() {
            return location.hash;
        },
        set(value) {
            return this.parent.properties.hash = value;
        },
        clear() {
            this.set('');
        },
        toggle(value) {
            if (location.hash === this.parent.firstSymbol(value, '#')) {
                this.clear();
                return false;
            }
            // else
            this.set(value);
            return true;
        },
    },

    clear() {
        this.search.clear();
        this.hash.clear();
    },
}.init();