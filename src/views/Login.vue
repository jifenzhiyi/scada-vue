<template>
  <div class="main">
    <div class="middle">
      <img
        class="logo"
        src="@/assets/images/maluLogo.png" />
      <a-form
        id="components-form-demo-normal-login"
        class="login-form"
        :form="form"
        @submit="handleSubmit">
        <h4>仓储管理系统</h4>
        <a-form-item>
          <a-input
            v-decorator="[ 'account', { rules: [{ required: true, message: '账号不能为空' }] } ]"
            placeholder="请输入账号">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[ 'password', { rules: [{ required: true, message: '密码不能为空' }] } ]"
            type="password"
            placeholder="请输入密码">
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage';
import { login } from './api';

export default {
  name: 'Login',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => !err && this.login(values));
    },
    async login(values) {
      const res = await login(values);
      if (res) {
        storage.set('scada_user_name', res.data.name);
        storage.set('scada_user_token', res.data.accessToken);
        this.$store.commit('SET_WAREHOUSE_LIST', res.data.warehouseIds);
        this.$store.commit('SET_WAREHOUSE_ID', res.data.warehouseIds[0]);
        this.$notice_success({
          minfo: '登录成功',
          func: () => {
            this.$router.push('/home');
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  background: url("../assets/images/bg.png") no-repeat center #f5f5f5;
  .middle {
    text-align: center;
    h4 { padding-bottom: 10px; }
    .logo {
      height: 60px;
      margin: 0 auto;
    }
    #components-form-demo-normal-login {
      width: 270px;
      padding: 24px;
      margin-top: 15px;
      background: #fff;
      border-radius: 14px;
      box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.1);
      .login-form-button {
        width: 100%;
      }
    }
  }
}
</style>
