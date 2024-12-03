import { faker } from '@faker-js/faker';

export const generateUserEmail = () => {
    return faker.internet.email();
};

export const generateUserMessage = (length) => {
    return faker.lorem.text().substring(0, length);
};