<template>
<!-- 登陆模块 -->
 <div class="login">
     <div class="map">
         <div class="mark">
     </div>
         <div class="content">
             <div class="fram">
                 <i class="el-icon-circle-close-outline icon" @click="skip"></i>
            <el-form action="/login" method = "post"  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="checkAge ">
            <el-input type="number" v-model="ruleForm2.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm2.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
        </div>
    </div> 
</div>
</div>   
</template>
<script>
export default {
    name:'lo',
    data(){
         var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话号码不为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 11) {
              callback(new Error('号码位数不符合'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          tel:''

        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          number: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
          _this.$http.post('/login',ruleForm2
          )
          .then(function(response){
            alert(response.data.r)
          })
          .catch(function(error){
            console.log(error)
          });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      skip(){
          console.log(1)
        window.history.back(-1);
    },
    },
    }
</script>
<style scoped>
.map{
    width:100%;
    height: 480px;
    position: relative;
}
.mark{
    width:100%;
    height: 900px;
    background-color:#000;
    position:absolute;
    top:-194px;
    left:0;
    z-index:999;
    opacity: 0.6;
}
.content{
    width:30%;
    height: 240px;
    background-color: #fff;
    border:1px solid #ddd;
    border-radius:10px;
    margin: auto;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9999;
}
.fram{
     width:75%;
    height: 240px;  
    padding:10px 30px 0 0;
    /* background-color: red; */
}
.fram .icon{
    display:inline-block;
    font-style:normal;
    position: absolute;
    top:-13px;
    right:-14px;
    font-size:20px;
    color:#fff;
    cursor: pointer;
}
</style>


