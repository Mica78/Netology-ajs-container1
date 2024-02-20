export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newmember) {
    let isMemberAdded = false;
    this.members.forEach((member) => {
      if (newmember.isEqual(member)) {
        isMemberAdded = true;
      }
    });
    if (!isMemberAdded) {
      this.members.add(newmember);
    } else {
      throw new Error('This member is already added');
    }
  }

  addAll(...array) {
    array.forEach((member) => {
      try {
        this.add(member);
      } catch (e) {
        console.error(e.message);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}
