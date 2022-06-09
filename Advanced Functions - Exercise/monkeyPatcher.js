function solution(command) {
    if (command == 'upvote') {
        this.upvotes++;
    } else if (command == 'downvote') {
        this.downvotes++;
    } else if (command == 'score') {

        let obfuscated = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            
        let obfuscatedUpVotes = this.upvotes + obfuscated;
        let obfuscatedDownVotes = this.downvotes + obfuscated;
       
        
        let totalVotes = this.downvotes + this.upvotes;
        let balance = obfuscatedUpVotes - obfuscatedDownVotes;
        let rating = '';

        if (this.upvotes / totalVotes > 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        }

        if (totalVotes < 10 || rating == '') {
            rating = 'new';
        }

        if (totalVotes > 50) {
            return [
                obfuscatedUpVotes,
                obfuscatedDownVotes,
                balance,
                rating
            ];
        } else {
            return [
                this.upvotes,
                this.downvotes,
                balance,
                rating
            ];
        }
    }
}
