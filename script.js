class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Некоректне значення для ролі!');
    }
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} увійшов в систему`);
  }

  logout() {
    console.log(`${this.name} вийшов з системи`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Ім'я користувача змінено на ${this.name}`);
  }

  changePassword(newPassword) {
    console.log(`Пароль користувача ${this.name} змінено на ${newPassword}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      alert('Додане значення не є об\'єктом користувача!');
      return;
    }
    this.users.push(user);
    console.log(`Користувач ${user.getName()} доданий до списку користувачів`);
  }

  removeUser(user) {
    if (!(user instanceof User)) {
      alert('Видалене значення не є об\'єктом користувача!');
      return;
    }
    const index = this.users.indexOf(user);
    if (index === -1) {
      console.log(`Користувач ${user.getName()} відсутній в списку користувачів`);
      return;
    }
    this.users.splice(index, 1);
    console.log(`Користувач ${user.getName()} видалений зі списку користувачів`);
  }

  changeUserRole(user, newRole) {
    if (!(user instanceof User)) {
      alert('Значення користувача не є об\'єктом користувача!');
      return;
    }
    if (newRole !== 'admin' && newRole !== 'user') {
      alert('Некоректне значення для нової ролі!');
      return;
    }
    user.role = newRole;
    console.log(`Роль користувача ${user.getName()} змінена на ${newRole}`);
  }

  getAllUsers() {
    console.log('Список користувачів:');
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.getName()} - ${user.getRole()}`);
    });
  }

  removeAllUsers() {
    this.users = [];
    console.log('Список користувачів очищено');
  }
}

const user1 = new User('Petro', 'admin');
const user2 = new User('Anna', 'user');
const admin1 = new Admin('Ivan');

console.log(user1.getName()); // Petro
console.log(user1.getRole()); // admin

console.log(user2.getName()); // Anna
console.log(user2.getRole()); // user

user1.login(); // Petro увійшов в систему
user2.login(); // Anna увійшов в систему

user1.changeName('Igor'); // Ім'я користувача змінено на Igor

admin1.addUser(user1); // Користувач Igor доданий до списку користувачів
admin1.addUser(user2); // Користувач Anna доданий до списку користувачів

admin1.changeUserRole(user1, 'user'); // Роль користувача Igor змінена на user

admin1.getAllUsers();
/*
Список користувачів:
1. Igor - user
2. Anna - user
*/

admin1.removeUser(user1); // Користувач Igor видалений зі списку користувачів

admin1.removeAllUsers(); // Список користувачів очищено

user1.logout(); // Igor вийшов з системи
user2.logout(); // Anna вийшов з системи