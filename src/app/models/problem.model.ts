export class Problem {
    id: number;
    name: string;
    desc: string;
    difficulty: string;

    constructor() {
        this.id = 0; // Initialize with default values
        this.name = "";
        this.desc = "";
        this.difficulty = "";
    }
}