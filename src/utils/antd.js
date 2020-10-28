import Vue from 'vue';
import {
  Button,
  ConfigProvider,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  message,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
  Tabs,
  Tooltip,
  Upload,
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(ConfigProvider);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Popconfirm);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Tooltip);
Vue.use(Upload);

Vue.prototype.$message = message;
Vue.prototype.$modal = Modal;
