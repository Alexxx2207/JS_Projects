function solution() {
    return {
        text: '',
        append(strToAppend) {
            this.text += strToAppend;
        },
        removeStart(n) {
            this.text = this.text.substring(n);
        },
        removeEnd(n) {
            this.text = this.text.substring(0, this.text.length - n)
        },
        print(){
            console.log(this.text);
        }
    }
}