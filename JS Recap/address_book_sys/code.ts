class Contact{
    // Encapsulaton: Properties are private and hidden from direct
    private _name: string;
    private _phone: string;
    private _email: string;

    constructor(name: string, phone:string, email:string){
        this._name= name;
        this._phone = phone;
        this._email = email; 
    }

    //Getter for name

    public get name(): string{
        return this._name
    }
    
    // getter for phone
    public get phone(): string{
        return this._phone
    }
    // getter for email
    public get email(): string{
        return this._email
    }
    //setter for phone
    public set phone(newPhone: string){
        if (newPhone.length >=7){
            this._phone = newPhone
        }else{
            console.error("Invalid phone number length")
        }
        
    }
    public set email(newEmail: string){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regex.test(newEmail)){
            this._email = newEmail
        }
        else{
            console.error("Invalid Email")
        }
        }
    // a method to display contact info
    public displayInfo(): void{
        console.log(`Name:${this._name} | Phone: ${this._phone} | Email:${this.email}`)
    }
}

class PersonalContact extends Contact{
    private _relationship: string;
    constructor(name: string, phone: string, email: string, relationship:string){
        super(name, phone, email)
        this._relationship = relationship;
    }
    public override displayInfo(): void{
        console.log(`[Personal] Name: ${this.name}| Phone: ${this.phone} | Email:${this.email} | Relationship: ${this._relationship} `)
    }
}
class BuisnessContact extends Contact{
    private _company: string;
    constructor(name: string, phone: string, email: string, company:string){
        super(name,phone,email)
        this._company = company;
    }
     public override displayInfo(): void{
        console.log(`[Personal] Name: ${this.name}| Phone: ${this.phone} | Email:${this.email} | Company: ${this._company} `)
    }

}

class AddressBook{
    private contacts: Contact[] = [];
    // constructor(contacts: []){
    //     this.contacts = contacts
    // }
    public AddContact(contact: Contact): void{
        this.contacts.push(contact);
        console.log(`Successfully added ${contact.name} to the address book`)
    }
    // Display all contacts
    public displayAll(): void{
        this.contacts.forEach((contact)=>{
            contact.displayInfo();
        })
    }
    // search contacts by name
    public searchContact(name : string){
        const found  = this.contacts.find((val: Contact) => val.name.toLowerCase() === name.toLowerCase());
        if(found){
            found.displayInfo()
        }else{
            console.log("Contacts not found")
        }
    }
}