import { v4 as uuidv4 } from 'uuid';


let footballers = [];

export const getUsers = (req, res) => {
    res.send(footballers);
}

export const createUser = (req, res) => {
    const footballer = req.body;
    
    footballers.push({ ... footballer, id: uuidv4() });

    res.send(`Footballer ${footballer.firstName} ${footballer.lastName} added to the database`);

}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundFootballer = footballers.find((footballer) => footballer.id == id);

    res.send(foundFootballer);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    footballers = footballers.filter((footballer) => footballer.id != id);

    res.send(`Footballer with id ${id} delete from database`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const footballer = footballers.find((footballer) => footballer.id == id);

    if(firstName) footballer.firstName = firstName; 
    if(lastName) footballer.lastName = lastName;
    if(age) footballer.age = age;

    res.send(`Footballer with id${id} has been updated`)

    
}