<template>
    <div class="loginframe">
        <div class="loginbox">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
  </el-form-item>
    <el-form-item label="电话号码" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入电话号码"></el-input>
  </el-form-item>
  <el-form-item label="身份证地区" prop="region">
    <el-select v-model="ruleForm.region" placeholder="中国大陆">
      <el-option label="中国大陆" value="shanghai"></el-option>
      <el-option label="港澳台" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="注册时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="城镇户口" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
   <el-form-item label="众筹类型" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="疾病"></el-radio>
      <el-radio label="其他"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="精准扶贫数据库人员" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="申请理由" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: "loginframe",
  data() {
    return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择一个地址', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写不少于50字', trigger: 'blur' }
          ]
        }
    };
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>
<style scoped>
.loginframe{
  width: 1349px;
  height: 1000px;
  background-color: #eceff1;
}
.loginbox{
  width:400px;
  height: 750px;
  margin: auto;
  padding-top:50px;
}
</style>


