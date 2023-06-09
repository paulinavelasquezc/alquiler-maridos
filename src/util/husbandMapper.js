class Carpenter {
    constructor() {
        this.id = "1020"
        this.name = "Carpintero";
        this.color = "#9CE4B0";
    }
}

class Electrician {
    constructor() {
        this.id = "1030"
        this.name = "Electricista";
        this.color = "#B9A0F4";
    }
}

class Painter {
    constructor() {
        this.id = "1040"
        this.name = "Pintor";
        this.color = "#FEE9B0";
    }
}

class Builder {
    constructor() {
        this.id = "1050"
        this.name = "Constructor";
        this.color = "#024751";
    }
}

class Locksmith {
    constructor() {
        this.id = "1060"
        this.name = "Cerrajero";
        this.color = "#CB81b4";
    }
}

class Others {
    constructor() {
        this.id = "0000"
        this.name = "Otros";
        this.color = "#9CD0E4";
    }
}

function fromIdCategory(id) {
    switch (id) {
        case "1020":
            return new Carpenter()
            break;
        case "1030":
            return new Electrician()
            break;
        case "1040":
            return new Painter()
            break;
        case "1050":
            return new Builder()
            break;
        case "1060":
            return new Locksmith()
            break;
        default:
            return new Others()
            break;
    }
}

export default fromIdCategory;
