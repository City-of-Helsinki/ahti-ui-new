import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialize } from './common/translation/i18n/i18n';

initialize();
configure({ adapter: new Adapter() });
