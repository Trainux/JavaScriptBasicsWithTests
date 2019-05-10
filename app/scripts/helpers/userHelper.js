import {getRandomNumber} from './randHelper';
import {User} from '../classes/User';
import $ from 'jquery';

export function generateUserList(){
 return [
  new User('Rafa', 'senior', getRandomNumber(100, 500)),
  new User('Trino', 'senior', getRandomNumber(100, 500)),
  new User('Dani1', 'senior', getRandomNumber(100, 500)),
  new User('Dani2', 'senior', getRandomNumber(100, 500)),
  new User('Dani3', 'senior', getRandomNumber(100, 500)),
  new User('Oscar', 'senior', getRandomNumber(100, 500)),
  new User('Ivan', 'senior', getRandomNumber(100, 500)),
  new User('Marta', 'senior', getRandomNumber(100, 500)),
  new User('David', 'senior', getRandomNumber(100, 500)),
  new User('Fonti', 'senior', getRandomNumber(100, 500)),
  new User('Sergio', 'senior', getRandomNumber(100, 500)),
  new User('Pol', 'senior', getRandomNumber(100, 500)),
  new User('Netza', 'senior', getRandomNumber(100, 500)),
  new User('Nadia', 'senior', getRandomNumber(100, 500)),
  new User('Olga', 'senior', getRandomNumber(100, 500)),
  new User('Patri', 'senior', getRandomNumber(100, 500)),
  new User('Cubinyas', 'senior', getRandomNumber(100, 500)),
  new User('Fontiveiros', 'senior', getRandomNumber(100, 500)),
  new User('Eloi', 'senior', getRandomNumber(100, 500)),
  new User('Oriol', 'senior', getRandomNumber(100, 500)),
  new User('Montse', 'junior', getRandomNumber(100, 500)),
  new User('Pau', 'junior', getRandomNumber(100, 500)),
  new User('Alberto', 'junior', getRandomNumber(100, 500)),
  new User('Pera', 'junior', getRandomNumber(100, 500)),
  new User('Manzana', 'junior', getRandomNumber(100, 500)),
  new User('Mandarina', 'junior', getRandomNumber(100, 500)),
  new User('Patata', 'junior', getRandomNumber(100, 500)),
  new User('Lechuga', 'junior', getRandomNumber(100, 500)),
  new User('Tomate', 'junior', getRandomNumber(100, 500)),
  new User('Pimiento', 'junior', getRandomNumber(100, 500)),
  new User('Escopinyes', 'junior', getRandomNumber(100, 500)),
  new User('Festucs', 'junior', getRandomNumber(100, 500)),
  new User('Engonall', 'junior', getRandomNumber(100, 500)),
  new User('Palplantat', 'junior', getRandomNumber(100, 500)),
  new User('Espiadimonis', 'junior', getRandomNumber(100, 500)),
  new User('Sky', 'junior', getRandomNumber(100, 500)),
  new User('React', 'junior', getRandomNumber(100, 500)),
  new User('NodeJs', 'junior', getRandomNumber(100, 500)),
  new User('JavaShit', 'junior', getRandomNumber(100, 500)),
  new User('Vanila', 'junior', getRandomNumber(100, 500))
 ];
}

export function searchUser(name, users) {
  const user = users.filter(u => u.name === name);

  $('.js-userDetail').html(`Name: ${user[0].Name}<br>Role: ${user[0].Role}<br>Level: ${user[0].Level}`);

  console.log(`Name: ${user[0].name} Role: ${user[0].Role} Level: ${user[0].Level}`);
}

export function generateGroup(list, numItems) {
  const seniors = list.filter(l => l.role === 'senior').sort(l => l.level);
  const junior = list.filter(l => l.role === 'junior').sort(l => l.level);
  const resultList = new Set();
  let seniorCount = 0;
  let juniorCount = 0;

  for (let i = 0; i < numItems; i++){
      if (i % 2 === 0) {
          const seniorUser = seniors[seniorCount];
          resultList.add(seniorUser);
          list = list.filter(x => x.name !== seniorUser.name);
          seniorCount++;
      } else {
        const juniorUser = junior[juniorCount];
        resultList.add(juniorUser);
        list = list.filter(x => x.name !== juniorUser.name);
        juniorCount++;
      }
  }

  return {group: Array.from(resultList), listUsers: list};

}
