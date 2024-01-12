// AuthService.js

class AuthService {
    static async authenticate(username, password) {
      try {
        console.log(`output->username, password`,username, password)
        // Gerçek bir kimlik doğrulama işlemi burada gerçekleştirilir.
        // Ancak bu örnekte JSONPlaceholder'ın "/users" endpoint'i kullanılacak.
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
  
        // Kullanıcı adı ve şifre kontrolü yapılır.
        const authenticatedUser = users.find(
          (user) => user.username === username && user.email === password
        );
  
        return authenticatedUser;
      } catch (error) {
        console.error('Authentication failed:', error);
        throw error;
      }
    }
  }
  
  export default AuthService;
  