<template>

<el-form :inline="true" :model="formInline" class="demo-form-inline">
<el-form-item label="Approved by">
  <el-input v-model="formInline.user" placeholder="Data"></el-input>
  {{result}}
</el-form-item>
  <el-form-item>
  <el-button type="primary" @click="onSubmit">Query</el-button>
</el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      result:""
    }
  },
  methods: {
   async onSubmit() {
      let {data}  = await this.$axios.post("/api/Demodata/postf" , { data:this.formInline['user'] });

      return this.result = data;
    }
  }
}
</script>