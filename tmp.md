
```js
// The scenario to test that we are able to update the newly created Todo will look like
import {addTodo, getTodoLabel, getTopTodoFromList, updateTodo} from './TodoUtil'

describe('Todo Application', ()=> {
  const INITIAL_TODO = 'Initial todo'
  const UPDATED_TODO = 'Updated todo'

  it('Can update a newly created todo', () =>
    addTodo(INITIAL_TODO)
      .then(updateTodo(UPDATED_TODO))
      .then(getTodoName)
      .should('equal', UPDATED_TODO)
  )
})
```

The new method `updateTodo` from `TodoUtils.js` looks like

```js
export const updateTodo = (name) => ($todo) => {
  cy.wrap($todo).within(() => {
    cy.get('label').dblclick()
    cy.get('.edit').clear().type(`${name}{enter}`)
  })

  return cy.wrap($todo)
```

### But I still love my Page Objects.

Most common arguments against Page Objects are 

1. Page Objects introduce additional state in addition to the AUT's state which makes tests hard to understand.
1. Using Page object means that all our tests are going to go through the Application's GUI.
1. Page objects try to fit multiple cases into a uniform interface, falling back to conditional logic.

While the above arguments are all true in my experience, but biggest problem with Page Objects arise due to Selenium's recommendation that "methods should return Page Objects". 

[Read all recommendations here](https://github.com/SeleniumHQ/selenium/wiki/PageObjects)

Let's try to look at some common situations we find ourselves in when using Page Objects and how to solve them.

#### Single Responsibility Principle is not met by Page Objects
PO bind unrelated functionality together in one class. e.g. in the below code `searchProduct()` functionality is not related to `login` or `logout` actions.

```java
public class HomePage {
    private final WebDriver webDriver;

    public HomePage(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    public SignUpPage signUp() {
        webDriver.findElement(By.linkText("Sign up")).click();
        return new SignUpPage(webDriver);
    }

    public void logOut() {
        webDriver.findElement(By.linkText("Log out")).click();
    }

    public LoginPage logIn() {
        webDriver.findElement(By.linkText("Log in")).click();
        return new LoginPage(webDriver);
    }
    
    public ProductPage searchProduct(String product){
        webDriver.findElement(By.linkText(product)).click();
        return new ProductPage(webDriver);
    }
    
}

```

This means that or class does not follow Single Responsiility Princial (SPR).

> The **Single Responsibility Principal (SRP)** states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.

Breaking Page Objects like above into multiple smaller Page Objects does not help with `SRP` either. 

e.g. We could take the `Login` action outside the `HomePage` and create a new `LoginPage` object and use it like below.

```Java
LoginPage loginPage = new HomePage().navigateToLoginPage();
loginPage.login("username", "password");
``` 

As the actions belong to 2 different pages, this code will repeat in all test cases that use login. The responsibility is not entirely encapsulated.

One way of fixing this is be to define our Class/Module not by the page but by the intent.

```js
// login.js

export const loginAsCustomer = (name, password) => {
}

```
The `loginAsCustomer` method can then work through both the Home and Login screens of the application to complete login as a single user action.

> :pencil: If possible, prefer basing your modules on user intent rather than basing them strictly by Page.

#### Page Order != User Flows

Another place where PO may complicate things is when User flows are not be same as the page order. 

Consider the example of a shopping website. Here the user can add an item to the cart either using the Product Page or using the search functionality on the Search page. 

From the Cart page the user maybe taken to either the Home page or the Search page on clicking "continue to shop", depending on if the last item was added using the Product Page or the Search Page.

The code for the `CartPage` class might now look something like this 

```java
public class CartPage{       
    Page continueShopping(){
     if(state) {  // determines using which page the last item was added
       return new SearchPage();
     }
     else {
       return new HomePage();
     }    
}

```

**Why is this a problem?**

Not only is this code more complex to understand and we have to maintain additional state, it also makes it harder to modify the CartPage if in future another user flow was introduced. This violates the _Open/Closed principle (OCP)._

> **The open/closed principle(OCP)** states “software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification”

One way to remove the state logic from our `Cart` Module is by changing the `continueShopping` method to not return references to other Classes/Modules and limit it to only clicking the continue shopping link.

```js
// cart.js

export const continueShopping(){
  cy.get('#continue').click();
}

// Test.js

it('user can add item to cart from home page post selecting "continue to shop"', (){
    //.... code to add product to the cart from Product Page
    cartPage.continueShopping();
    homePage.navigateToProductPage();
    productPage.addItemToCart('item2');
})

it('user can add item to cart from search page post selecting "continue to shop"', (){
    //.... code to add product to the cart using Search
    cartPage.continueShopping();
    searchPage.addItemToCart('item');
})
```

In this example our Test builds user flows just by choosing the right order of calling loosely coupled steps. This means our individual modules did not have to maintain state and state based was removed.

#### Loosely coupled steps

Need another example of how loosely coupled steps reduce complexity? Consider the below typical `LoginPage` class.

Business requirement is that on successful login use is taken to "Home Page" and on unsuccessful login use stays on the "Login" page.

```java
class LoginPage {
    HomePage validLogin(String userName,String password){...}
    LoginPage invalidLogin(String userName,String password){...}
  }
}
```

Now let's introduce roles in the mix. An "Admin" on login is taken to the "Admin Dashboard" instead of the Home Page. So we now need to add another method to the LoginPage class and return an instance of the "Admin Dashboard" Page.

```java
class LoginPage {
    HomePage validLogin(String userName,String password){...}
    LoginPage invalidLogin(String userName,String password){...}

    AdminDashboardPage adminValidLogin(String userName,String password){...}
  }
}
```

More roles will mean even more methods because there is a tight coupling between the pages and the return type. 

Let's fix this by not returning references to different pages by the login action.

```js
// login.js
export default const login = (username, password) => {
  cy.get('.username').type(username)
  cy.get('.password').type(password)
  cy.click('.loginButton')
}
```

Our test will now look like

```js
// Test.js
it('User is taken to Home Page on valid login', ()=> {
   login('prateek', '12345')
   cy.title().should('equal', 'Home Page');
})

it('Admin is taken to Admin Dashboard on valid login', ()=> {
   login('admin', '12345')
   cy.title().should('equal', 'Admin Dashboard');
})

```

Hopefully you can see that preferring Loosely Coupled steps leads to us writing less lines of code with reduced complexity.

> :bulb: ASS tests in NIB when through a big refactor 2 years back to not have methods return Page Objects.

## Resources

[ImmutableJS](https://immutable-js.github.io/immutable-js/docs/#/)
[RamdaJS](https://ramdajs.com/)
[ESLint FP Plugin](https://www.npmjs.com/package/eslint-plugin-fp)

[OO VS FP](https://medium.com/@cscalfani/)
[Goodby Object oriented programming](goodbye-object-oriented-programming-a59cda4c0e53)
[7 Reasons to use FP for Frontend](https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/)

## Sources

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-currying-5652e489cce8



https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7

https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1

https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-currying-5652e489cce8

https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/
