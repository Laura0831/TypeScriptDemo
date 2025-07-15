 class Employee{
    id!: number;
    name!: String;
    address!: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
 }

 let john = new Employee(1, "John Monroe", "2425 type st. Maine USA");

//  john.id = 1;
//  john.name = "John Monroe";
//  john.address = "2425 type st. Maine USA";

    console.log(john.name);