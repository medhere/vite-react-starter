import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

var randomName = faker.person.fullName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var firstName = faker.person.firstName(sex);
var lastName = faker.person.lastName();
var email = faker.internet.email({ firstName, lastName });
var email = faker.helpers.unique(faker.internet.email, [ firstName, lastName, ]);
var subscription = faker.helpers.arrayElement(['free', 'basic', 'business'])
var id = faker.datatype.uuid()
var avatar = faker.image.avatar()
var birthday = faker.date.birthdate()

console.log(
    JSON.stringify( { randomName, randomEmail } )
)