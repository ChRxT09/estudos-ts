type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};
type ElevatedEmployee = Admin & Employee


const employee: ElevatedEmployee = {
  name: 'Gus',
  startDate: new Date(),
  privileges: [],
}


// index properties
interface Something {
	[prop: string]: string
}

const error: Something = {
	message: 'heehee'
}