function solve() {
    let object = {
        list: [],
        size: 0,
        add(element) {
            this.list.push(element);
            this.size++;
            this.list.sort((a, b) => a - b);
        },
        remove(index) {
            if(index >= 0 && index < this.size) {
                this.list.splice(index,1);
                this.list.sort((a, b) => a - b);
                this.size--;
            }   
        },
        get(index) {
            if(index >= 0 && index < this.size) {
                return this.list[index];
            } 
        }
    };

    return object;
}
