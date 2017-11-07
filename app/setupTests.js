// var configure = require('emzyme').configure
// var Adapter = require('enzyme-adapter-react-16').adapter

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
