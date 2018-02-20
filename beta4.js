class dog {
    constructor(bemenet1, bemenet2, bemenet3) {
        this.fajtaproperty = bemenet1;
        this.kor = bemenet2;
        this.nem = bemenet3;
    }
    getbreed() {
        return this.fajtaproperty;
    }

    varhatoeletkor() {
        if(this.nem=1) {
            return 50-this.kor;
        } else {
            return 100-this.kor;
        }
    }
    harmadikmetodus(bemenetamethodusnak) {
        console.log(bemenetamethodusnak)
    }
}
peldany = new dog('boxer', 20, 2)
console.log(peldany.varhatoeletkor());
console.log(peldany.getbreed());
console.log(peldany.harmadikmetodus('ilyet is lehet'));
