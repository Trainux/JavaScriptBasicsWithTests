export class User {
  constructor(n, r, l) {
    this.name = n;
    this.role = r;
    this.level = l;
  }

  get Name() {
    return this.name;
  }
  set Name(n) {
    this.name = n;
  }

  get Role() {
    return this.role;
  }
  set Role(r) {
    this.role = r;
  }

  get Level() {
    return this.level;
  }
  set Level(l) {
    this.level = l;
  }

}
