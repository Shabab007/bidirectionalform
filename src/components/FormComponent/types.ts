interface Address {
    street: string;
    city: string;
    state: string;
    zip_code: string;
  }
  
  interface info {
    name: string;
    age: number;
    email: string;
    address: Address;
  }
  
  interface UserInfo{
    user_info:info
  }