abstract class ApiClient<T> {
  // Shared behavior
  async getAll(): Promise<T[]> {
    const res = await fetch("");
    return res.json();
  }

  // Required behavior: each subclass MUST implement this
  protected abstract getEndpoint(): string


  // 1. child classes must have an implementation of abstract methods
  // 2. access control must be maintained
  // 3. the abstract metgods cannot have implementation
}
 
const apiClient = new ApiClient()
interface User{
  name: string;
  age: number;

}
interface Product{
  price: number;
  name:string;
  Quantity:string;

}
class UserClient extends ApiClient<User> {
  protected getEndpoint(): string { 
    return "/api/users";
   }
}

class ProductClient extends ApiClient<Product> {
  protected getEndpoint(): string { 
    return "/api/products";
   }
}
