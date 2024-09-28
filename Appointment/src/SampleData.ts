import { faker } from "@faker-js/faker";



const unique = (list: any[]) => {
    return list.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

const pickRandom = (list: any[]) => {
    return list[Math.floor(Math.random() * list.length)]
}

const today = new Date();
const at = (hours: number) => today.setHours(hours, 0);

const stylists = unique([0, 1, 2, 3, 4, 5, 6].map(() => faker.name.firstName()));

const services = [
    "Cut",
    "Blow-dry",
    "Cut & color",
    "Beard trim",
    "Cut & beard trim",
    "Extensions",
];

const generateFakeCustomer = () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
});

const generateFakeAppointment = () => ({
    customer: generateFakeCustomer(),
    stylist: pickRandom(stylists),
    service: pickRandom(services),
    notes: faker.lorem.paragraph(),
});

export const sampleAppointments = [
    { startsAt: at(9), ...generateFakeAppointment() },
    { startsAt: at(10), ...generateFakeAppointment() },
    { startsAt: at(11), ...generateFakeAppointment() },
    { startsAt: at(12), ...generateFakeAppointment() },
    { startsAt: at(13), ...generateFakeAppointment() },
    { startsAt: at(14), ...generateFakeAppointment() },
    { startsAt: at(15), ...generateFakeAppointment() },
    { startsAt: at(16), ...generateFakeAppointment() },
    { startsAt: at(17), ...generateFakeAppointment() },
];
