import { shallow } from 'enzyme';
import App from './App';

describe('Tests for App component', () => {
  it('App renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });
  it('App renders a div with the class App-header', () => {
    const app = shallow(<App />);
    const appHeader = app.find('div.App-header');
    expect(appHeader.exists()).toBe(true);
  });
  it('App renders a div with the class App-body', () => {
    const app = shallow(<App />);
    const appBody = app.find('div.App-body');
    expect(appBody.exists()).toBe(true);
  });
  it('App renders a div with the class App-footer', () => {
    const app = shallow(<App />);
    const appFooter = app.find('div.App-footer');
    expect(appFooter.exists()).toBe(true);
  });
});
