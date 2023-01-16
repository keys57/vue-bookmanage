<template>
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
        <el-form-item label="Activity name" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
            <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
        </el-form-item>
        <el-form-item label="Instant delivery" prop>
            <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                delivery: false,
                type: [],
            },
            //表单验证规则
            rules: {
                name: [
                    { required: true, message: "请输入名称", trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },

                ],
                region: [
                    { required: true, message: "请选择地区", trigger: 'blur' }
                ]
            }
        }

    },
    methods: {
        onSubmit() {
            console.log(this.form)
        },
        // 输入验证
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!');
                    return false
                }
            })
        }
    }
}
</script>