abstract class Heehee {
	abstract bruh(bruh: string): any;
}

class Pimba {
	static readonly sup: string = "asdasdasdasd";
	constructor(private att: string, public pimba: string) {}
}

class Tome extends Pimba {
	constructor(att: string, pimba: string, private tome: string) {
		super(att, pimba);
	}

	get toma() {
		return this.tome;
	}
	set tomaa(heehee: any) {
		this.tome = "tome";
	}
}

class Aaaa {
	constructor(public a: number, public b: number, public c: number) {}
}

class Bbbb extends Aaaa {
	private static instance: Bbbb;
	private constructor(a: number, b: number, c: number, public d: number) {
		super(a, b, c);
	}

	static getInstance(a: number, b: number, c: number, d: number) {
		if (Bbbb.instance) {
			return this.instance;
		}
		this.instance = new Bbbb(a, b, c, d);
		return this.instance;
	}
}

console.log(new Tome("sdfsdaf", "sadfsdfsdf", "qweqweqw").toma);
