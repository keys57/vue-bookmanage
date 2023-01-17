<template>
    <el-upload v-model:file-list="fileList" class="upload-demo"
        action="http://localhost:8000/api/v1/upload" 
        multiple 
        :on-preview="handlePreview"
        :on-remove="handleRemove" 
        :before-remove="beforeRemove" 
        :limit="3" 
        list-type="picture"
        :on-exceed="handleExceed">
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
            </div>
        </template>
    </el-upload>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    name: 'element-plus-logo.svg',
                    url: 'https://element-plus.org/images/element-plus-logo.svg',
                },
                {
                    name: 'element-plus-logo2.svg',
                    url: 'https://element-plus.org/images/element-plus-logo.svg',
                }
            ]
        }
    },
    methods:{
        handleRemove(file, fileList){
            console.log(file, fileList)
        }
    }
}
</script>