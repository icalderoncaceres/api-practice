
const { faker } = require('@faker-js/faker');

const createRandomClient = () => {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        age: faker.person.age,
        gender: faker.person.gender(),
      };
}

const CLIENTS = faker.helpers.multiple(createRandomClient, {
    count: 30,
});

module.exports = CLIENTS;