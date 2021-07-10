<template>
  <v-container
    class="mt-8"
  >
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="نام و نام خانوادگی"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="ایمیل"
        required
      ></v-text-field>
      <v-text-field
        v-model="mobile"
        :rules="mobileRules"
        label="شماره همراه"
        required
      ></v-text-field>
      <v-text-field
        v-model="nationalCode"
        :rules="nationalCodeRules"
        label="کد ملی"
        required
      ></v-text-field>
      <v-text-field
        v-model="pass"
        :rules="passRules"
        :type="'password'"
        label="رمز عبور"
        required
      ></v-text-field>
      <v-text-field
        v-model="confirmPass"
        :rules="confirmPassRules"
        :type="'password'"
        label="تائید رمز عبور"
        required
      ></v-text-field>
      <v-row
        class="mb-4 mt-1"
      >
        <v-checkbox
          class="mr-2"
          label="فعال"
          required
        ></v-checkbox>
      </v-row>
      <v-row>
        <v-btn
          color="success"
          class="ml-4 mr-2"
          @click="signUp"
        >
          ثبت نام
        </v-btn>
        <v-btn
          color="error"
          class="ml-4"
          @click="clearData"
        >
          پاک کردن فرم
        </v-btn>
        <v-btn
          color="warning"
          to="/showLists"
        >
          لیست افراد ثبت نام شده
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'Register',
    data: () => ({
      name: "",
      nameRules: [
        v => !!v || "لطفا نام خود را وارد نمایید",
        v => (v && v.length > 3) || "نام وارد شده باید بیشتر از سه کاراکتر باشد",
      ],
      email: "",
      emailRules: [
        v => !!v || 'لطفا ایمیل خود را وارد نمایید',
        v => /.+@.+/.test(v) || 'ایمیل وارد شده معتبر نیست',
      ],
      mobile: "",
      mobileRules: [
        v => !!v || "لطفا شماره همراه خود را وارد نمایید",
        v => (v && v.length <= 11) || "شماره همراه باید ۱۱ رقم باشد",
        v => /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/.test(v) || 'شماره همراه وارد شده معتبر نیست',
      ],
      nationalCode: "",
      pass: "",
      passRules: [
        v => !!v || "لطفا رمز عبور خود را وارد نمایید",
        v => (v && v.length >= 8) || "رمز عبور باید حداقل هشت کاراکتر باشد",
        v => /(?=.*[A-Z])/.test(v) || "رمز عبور باید حداقل شامل یک حرف بزرگ باشد",
        v => /(?=.*\d)/.test(v) || "رمز عبور باید حداقل شامل یک عدد باشد",
        v => /([!@$%])/.test(v) || "رمز عبور باید حداقل شامل یک کاراکتر خاص باشد [!@$%]",
      ],
      confirmPass: ""
    }),
    methods: {
      signUp() {
        this.$refs.form.validate() && alert("ثبت نام با موفقیت انجام شد");
      },
      clearData() {
        this.$refs.form.reset();
      }
    },
    computed: {
      nationalCodeRules() {
        if (this.nationalCode == "") {
          return ["وارد نمودن کد ملی الزامی می باشد"]
        }
        if (!/^\d{10}$/.test(this.nationalCode)) {
          return ["کد ملی باید ۱۰ رقم باشد"];
        }
        const check = +this.nationalCode[9];
        const sum = this.nationalCode.split('').slice(0, 9).map((x, i) => +x * (10 - i)).reduce((x, y) => x + y) % 11;
        if (sum < 2 ? check == sum : check + sum == 11) {
          return [];
        } else {
          return ["کد ملی وارد شده معتبر نیست"];
        }
      },
      confirmPassRules() {
        if (this.pass === this.confirmPass) {
          return []
        } else {
          return ["رمز عبور مجدد، صحیح نمی باشد"];
        }
      }
    }
  }
</script>
