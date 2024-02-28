export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newmember) {
    if (this.members.has(newmember)) {
      throw new Error('This member is already added');
    } else {
      this.members.add(newmember);
    }
  }

  addAll(...args) {
    args.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return [...this.members];
  }
}
