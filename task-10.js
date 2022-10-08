import users from './users.js';

const getSortedUniqueSkills = (users) => {
  return users.reduce((prev, user) => {
    user.skills.forEach((skill) => {
      if (!prev.includes(skill)) {
        prev.push(skill);
      }
    });

    return prev;
  }, []);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
