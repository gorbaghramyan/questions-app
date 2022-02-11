export type id = number | null;

interface CategoryI {
    id: id;
    name: string;
}

export class Category implements CategoryI {
    id: id;
    name: string;

    constructor(id: id, name: string) {
        this.id = id;
        this.name = name;
    }
}