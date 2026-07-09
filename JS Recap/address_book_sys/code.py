
class Contact:
    
    def __init__(self,name: str,phone: str,email: str):
        self._name = name
        self._phone =phone
        self._email = email
        pass
    #Getter for name
    @property
    def name(self) -> str:
        return self._name
    @property
    def email(self)-> str:
        return self._email
    @property
    def phone(self)->str:
        return self._phone
    
    #setter for phone
    @phone.setter
    def phone(self,new_phone: str):
        if len(new_phone) >=7:
            self._phone = new_phone
        else:
            print("Invalid phone number length")
            
    @email.setter
    def email(self,newEmail: str):
        email_regex = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
        if re.match(self._regex, newEmail):
            print("valid email")
        else:
            print("Invalid email format")
            
#method to display info
    def display_info(self):
        print(f"Name: {self._name} | Phone: ${self._phone}")
    
    
class PersonalContact(Contact):
   def __init__(self, name: str, phone: str, email: str):
       super().__init__(name, phone, email)
       
       
       
       
       
       
       
       
# class AddressBook: