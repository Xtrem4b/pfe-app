import { User } from './models/user';


export const USERS: User[] = [
    {id: 1, email: 'toto@mail.com', password: '123',
        name: 'Toto',
        sexe: 'M',
        age: 20,
        taille: 1.75,
        poids: 70,
        tabac: 0,
        activite: 3,
        alimentation: 2,
    },

    {id: 2, email: 'titi@mail.com', password: '456',
        name: 'Titi',
        sexe: 'F',
        age: 20,
        taille: 1.65,
        poids: 60,
        tabac: 1,
        activite: 2,
        alimentation: 3,
    }
];
