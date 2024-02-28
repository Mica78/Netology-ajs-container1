export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newmember) {
    if (!this.members.has(newmember)) {
      this.members.add(newmember);
    } else {
      throw new Error('This member is already added');
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
