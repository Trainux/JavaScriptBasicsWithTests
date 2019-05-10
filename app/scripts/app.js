import './vendor';
import $ from 'jquery';
import {generateUserList, searchUser, generateGroup} from './helpers/userHelper';

const users = generateUserList();


// console.log('holaMundo');
// console.log($);

function fillUsersGroup(numGroup, usersGroup) {
  $(`.js-group${numGroup}`).html(usersGroup.map(x => x.name).join('<br>'));
}

$('.js-userInfo').on('click', () => {
  try {
    let name = $('.js-searchName').val();
    searchUser(name, users);
  } catch (e) {
    console.error(e.message);
  }
});

function printGroup(numGroup, usersCpy, initialTick, numGroups) {
  const tick = performance.now();
  if (tick - initialTick >= 2000) {
    initialTick = performance.now();
    let result = generateGroup(usersCpy, 10);
    fillUsersGroup(numGroup, result.group);
    usersCpy = JSON.parse(JSON.stringify(result.listUsers));

    if (numGroup < numGroups) {
      numGroup++;
      requestAnimationFrame( () => {
        printGroup(numGroup, usersCpy, initialTick, numGroups);
      });
    }


  } else {
    requestAnimationFrame( () => {
      printGroup(numGroup, usersCpy, initialTick, numGroups);
    });
  }


}


$('.js-generateGroups').on('click', () => {
  try {
    let usersCpy = JSON.parse(JSON.stringify(users));


    requestAnimationFrame( () => {
      const tick = performance.now();
      printGroup(1, usersCpy, tick, 4);

    });
    // for (let i = 1; i <= 4; i++) {
    //   let result = generateGroup(usersCpy, 10);
    //   fillUsersGroup(i, result.group);
    //   usersCpy = JSON.parse(JSON.stringify(result.listUsers));
    // }

  } catch (e) {
    console.error(e.message);
  }
});



function printUser() {
  let usersHtml = '';
  for (let i = 0; i < users.length; i++) {
    usersHtml += `<tr><td id="user_${i}">${users[i].Name}</td></tr>`;
  }

  $('.js-users').html(`<table>${usersHtml}</table>`);
}

$(document).ready(() => {
  printUser();

  $('td').on('click', (e) => {
    searchUser(e.currentTarget.innerHTML, users);
  });
});
