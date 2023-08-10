/* Map Task 1 */

class DB {

  constructor () {
    this.map = new Map();
    this.idCounter = 1;
  }

  create(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      throw new Error ('Invalid input')
    } else if  (typeof obj.name !== 'string' || typeof obj.age !== 'number' || typeof obj.country !== 'string' || typeof obj.salary !== 'number') {
      throw new Error ('Invalid obj property')
    } else if (!obj.name || !obj.age || !obj.country || !obj.salary) {
      throw new Error ('obj property missing')
    }

    const id = this.idCounter.toString();

    this.map.set(id, obj);

    this.idCounter++;

    return id;
  }

  read(id) {
    if (!id) {
      throw new Error ('Id is required')
    } else if (typeof id !== 'string' && typeof id !== 'number') {
      throw new Error ('Invalid Id type')
    } else if (typeof id === 'number') {
      id = id + '';
    }

    const data = this.map.get(id);

    if (data) {
      return {...data, id};
    } else {
      return null;
    }
  }

  readAll(...args) {
    if (args.length) {
      throw new Error ('readAll doesn\'t accept parameters');
    }
    return Array.from(this.map.values());
  }

  update(id, obj) {
    if (!id || !obj) {
      throw new Error ('parameter(s) missing');
    } else if (typeof id !== 'string' && typeof id !== 'number') {
      throw new Error ('invalid id type');
    } else if (typeof id === 'number') {
      id += '';
    } else if (!this.map.get(id)) {
      throw new Error ('user id not found');
    } else if (typeof obj !== 'object' || Array.isArray(obj)) {
      throw new Error ('invalid object argument')
    }

    let updatedValue = Object.assign(this.map.get(id), obj);
    this.map.set(id, updatedValue);

    return id;
  }

  delete(id) {
    if (!id) {
      throw new Error ('id is required');
    } else if (typeof id !== 'string' && typeof id !== 'number') {
      throw new Error ('invalid id  type');
    } else if (typeof id === 'number') {
      id += '';
    }

    return this.map.delete(id);
  }

}

/* Map Task 2 */
