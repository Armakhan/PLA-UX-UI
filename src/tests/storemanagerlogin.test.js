
import React from 'react';
import { render,screen,fireEvent} from '@testing-library/react';
import StoreManagerLogin from '../components/StoreManagerLogin/StoreManagerLogin';
import { MemoryRouter } from 'react-router-dom';
import { skipChangeValueUser,skipChangeValuePassWord,validateUsername,handleEnable,handleButtonClick,handleRememberMe,handleUsernameChange,handleConfirmPasswordChange } from '../components/StoreManagerLogin/StoreManagerLogin';
import LeftContent from '../components/StoreManagerHome/LeftContent';
jest.mock('axios', () => 'axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
test('renders the component', () => {
  render(<LeftContent />);
});
describe ("test the login page",()=>{
  test ('heaadings with login button', () => {
    render(<StoreManagerLogin/>);
    expect(screen.getByTestId("login-btn")).toBeDisabled();
  });
})
test ('renders the loginscreen with one button', async() => {
  render(<StoreManagerLogin/>);
  const button= await screen.findAllByRole("button");
  expect(button).toHaveLength(1);
} );
test ('renders the loginscreen.', () => {
  render(<StoreManagerLogin/>);
  const forgot=screen.getByText("Accelarate your?");
  expect(forgot).toBeInTheDocument();

} );
test ('renders the validate employee id.', () => {
  render(<StoreManagerLogin/>);
  const testEmployeeId="dipeshu";
  expect(validateUsername(testEmployeeId)).toBe(false);
} );
test('renders the forgot', () => {
  render(<StoreManagerLogin/>);
  const forgot=screen.getByText("Forgot Password?");
  expect(forgot).toBeInTheDocument();
} );
test ('renders the text.', () => {
    render(<StoreManagerLogin/>);
    const login=screen.getByText("Accelarate your");
    expect(login).toBeInTheDocument();
} );
describe('skipChangeValueUser', () => {
  it('should set setErrorSkipUserLog to false when user is empty', () => {
    render(<StoreManagerLogin/>);
    const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
    fireEvent.change(input,{target:{value:""}});
    const password=screen.getByPlaceholderText("Enter Password");
    fireEvent.change(password,{target:{value:"12345"}});
    expect (screen.getByText("Employee Id is Required")).toBeInTheDocument();
  });
  it('should set setErrorSkipUserLog to false when user is emptyone', () => {
    render(<StoreManagerLogin/>);
    const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
    fireEvent.change(input,{target:{value:""}});
    const password=screen.getByPlaceholderText("Enter Password");
    fireEvent.change(password,{target:{value:""}});
    expect (screen.getByText("Password is Required")).toBeInTheDocument();
  });

  it('should set setErrorSkipUserLog to false when user is only whitespace', () => {
    const user = '    '; // Contains only spaces
    let setErrorSkipUserLog = true;

    skipChangeValueUser(user, setErrorSkipUserLog);

    expect(setErrorSkipUserLog).toBe(false);
  });

  it('should set setErrorSkipUserLog to true when user has non-whitespace content', () => {
    const user = 'JohnDoe';
    let setErrorSkipUserLog = false;

    skipChangeValueUser(user, setErrorSkipUserLog);

    expect(setErrorSkipUserLog).toBe(true);
  });
  
  it('should not change setErrorSkipUserLog when user is non-empty and setErrorSkipUserLog is already true', () => {
    const user = 'Alice';
    let setErrorSkipUserLog = true;

    skipChangeValueUser(user, setErrorSkipUserLog);

    expect(setErrorSkipUserLog).toBe(true);
  });
});
describe('skipChangeValueUser function', () => {
  // Test case 1: Empty user
  it('should set errorSkipUserLog to false when user is empty', () => {
    // const setErrorSkipUserLog = jest.fn();
    const user = '  ';
    expect(skipChangeValueUser(user)).toBe(false);
  });

  // Test case 2: Non-empty user
  it('should set errorSkipUserLog to true when user is non-empty', () => {
    const setErrorSkipUserLog = jest.fn();
    const user = 'John';
    skipChangeValueUser(user, setErrorSkipUserLog);
    expect(setErrorSkipUserLog).toHaveBeenCalledWith(true);
  });
});

describe('skipChangeValuePassWord function', () => {
  // Test case 1: Empty password
  it('should set errorSkipPassWordLog to false when password is empty', () => {
    const setErrorSkipPassWordLog = jest.fn();
    const password = '';
    skipChangeValuePassWord(password, setErrorSkipPassWordLog);
    expect(setErrorSkipPassWordLog).toHaveBeenCalledWith(false);
  });

  // Test case 2: Non-empty password
  it('should set errorSkipPassWordLog to true when password is non-empty', () => {
    const setErrorSkipPassWordLog = jest.fn();
    const password = 'securePassword';
    skipChangeValuePassWord(password, setErrorSkipPassWordLog);
    expect(setErrorSkipPassWordLog).toHaveBeenCalledWith(true);
  });
});

describe('handleUsernameChange function', () => {
  // Test case 1: Empty username
  it('should set user to empty string when username is empty', () => {
    const setUser = jest.fn();
    const setErrorSkipUserLog = jest.fn();
    const username = '';
    handleUsernameChange(username, setUser, setErrorSkipUserLog);
    expect(setUser).toHaveBeenCalledWith('');
    expect(setErrorSkipUserLog).toHaveBeenCalledWith(false);
  });

  // Test case 2: Non-empty username
  it('should set user to the provided username when username is non-empty', () => {
    const setUser = jest.fn();
    const setErrorSkipUserLog = jest.fn();
    const username = 'John';
    handleUsernameChange(username, setUser, setErrorSkipUserLog);
    expect(setUser).toHaveBeenCalledWith(username);
    expect(setErrorSkipUserLog).toHaveBeenCalledWith(true);
  });
});

describe('handleConfirmPasswordChange function', () => {
  // Test case 1: Empty password
  it('should set password to empty string when password is empty', () => {
    const setPassword = jest.fn();
    const setErrorSkipPassWordLog = jest.fn();
    const password = '';
    handleConfirmPasswordChange(password, setPassword, setErrorSkipPassWordLog);
    expect(setPassword).toHaveBeenCalledWith('');
    expect(setErrorSkipPassWordLog).toHaveBeenCalledWith(false);
  });

  // Test case 2: Non-empty password
  it('should set password to the provided password when password is non-empty', () => {
    const setPassword = jest.fn();
    const setErrorSkipPassWordLog = jest.fn();
    const password = 'securePassword';
    handleConfirmPasswordChange(password, setPassword, setErrorSkipPassWordLog);
    expect(setPassword).toHaveBeenCalledWith(password);
    expect(setErrorSkipPassWordLog).toHaveBeenCalledWith(true);
  });
});

describe('handleRememberMe function', () => {
  // Test case 1: Remember me is checked
  it('should set username in localStorage when rememberMe is checked', () => {
    const rememberMe = true;
    const username = 'John';
    handleRememberMe(rememberMe, username);
    expect(localStorage.getItem('username')).toBe(username);
  });

  // Test case 2: Remember me is unchecked
  it('should remove username from localStorage when rememberMe is unchecked', () => {
    const rememberMe = false;
    const username = 'John';
    handleRememberMe(rememberMe, username);
    expect(localStorage.getItem('username')).toBeNull();
  });
});

describe('handleButtonClick function', () => {
  it('should call axios.post when username and password are non-empty', () => {
  const axios = require('axios');
  const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
  fireEvent.change(input,{target:{value:"323232"}});
  const password=screen.getByPlaceholderText("Enter Password");
  fireEvent.change(password,{target:{value:"12345"}});
  const button = screen.getByTestId('login-btn', { name: 'Login to Account' });
  fireEvent.click(button);
  expect(axios.post).toHaveBeenCalled();
  })
  // Test case 1: Empty username
  it('should not call axios.post when username is empty', () => {
    const axios = require('axios');
    const username = '';
    const password = 'securePassword';
    handleButtonClick(username, password);
    expect(axios.post).not.toHaveBeenCalled();
  });

  // Test case 2: Empty password
  it('should not call axios.post when password is empty', () => {
    const axios = require('axios');
    const username = 'John';
    const password = '';
    handleButtonClick(username, password);
    expect(axios.post).not.toHaveBeenCalled();
  });

  // Test case 3: Non-empty username and password
  it('should call axios.post when username and password are non-empty two', () => {
    const axios = require('axios');
    const username = 'John';
    const password = 'Arpan@12';
    handleButtonClick(username, password);
    expect(axios.post).toHaveBeenCalled();
  });
});

describe('handleEnable function', () => {
  // Test case 1: Empty username and password
  it('renders a disabled button when isButtonDisabled prop is true', () => {
    render(<StoreManagerLogin/>);
      const button = screen.getByTestId('login-btn', { name: 'Login to Account' });

      expect(button).toBeDisabled();
  });

  // Test case 2: Empty username and non-empty password
  it('should return false when username is empty and password is non-empty', () => {
    const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
    fireEvent.change(input,{target:{value:""}});
    const password=screen.getByPlaceholderText("Enter Password");
    fireEvent.change(password,{target:{value:"12345"}});
    const button = screen.getByTestId('login-btn', { name: 'Login to Account' });

    expect(button).toBeDisabled();
  });

  // Test case 3: Non-empty username and empty password
  it('should return false when username is non-empty and password is empty', () => {
    const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
    fireEvent.change(input,{target:{value:"121312"}});
    const password=screen.getByPlaceholderText("Enter Password");
    fireEvent.change(password,{target:{value:""}});
    const button = screen.getByTestId('login-btn', { name: 'Login to Account' });

    expect(button).toBeDisabled();
  });

  // Test case 4: Non-empty username and password
  it('should return true when username and password are non-empty', () => {
    const input=screen.getByPlaceholderText("Enter Six digit Employee ID");
    fireEvent.change(input,{target:{value:"121312"}});
    const password=screen.getByPlaceholderText("Enter Password");
    fireEvent.change(password,{target:{value:"12121212"}});
    const button = screen.getByTestId('login-btn', { name: 'Login to Account' });

    expect(button).not.toBeDisabled();
  });

  it ('should redirect to forgot password page',()=>{
    render(    
    <MemoryRouter> 
    <StoreManagerLogin />
  </MemoryRouter>);
    const forgotPasswordLink= screen.getByText("link", { name: "Forgot Password?" }).toBeInTheDocument();
    fireEvent.click(forgotPasswordLink);

    expect(screen.getByText("Please Enter your registered Email ID")).toBeInTheDocument();
  });
  
});


