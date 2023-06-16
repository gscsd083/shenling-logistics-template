<!-- 运费模板添加&修改 -->
<template>
  <div>
    <el-dialog
      class="assign-role"
      title="新增运费"
      :visible="dialogshow"
      width="700px"
      @close="close"
      @open="open"
    >
      <!-- el-checkbox-group选中的是 当前用户所拥有的角色  需要绑定 当前用户拥有的角色-->
      <!-- <el-checkbox-group>
        <el-checkbox

          :label="11"
        >
        </el-checkbox>
      </el-checkbox-group> -->
      <el-form
        ref="form"
        :model="freightFrom"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="模板类型"
          prop="templateType"
        >
          <el-select
            v-model="freightFrom.templateType"
            placeholder="请选择模板类型"
          >
            <el-option
              label="区同城寄域一"
              value="1"
            ></el-option>
            <el-option
              label="省内寄"
              value="2"
            ></el-option>
            <el-option
              label="经济区互寄"
              value="3"
            ></el-option>
            <el-option
              label="跨省"
              value="4"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="运送类型"
          prop="transportType"
        >
          <el-select
            v-model="freightFrom.transportType"
            placeholder="请选择运送类型"
          >
            <el-option
              label="普快"
              value="1"
            ></el-option>
            <el-option
              label="特快"
              value="2"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="关联城市"
          prop="associatedCityList"
        >
          <el-input v-model="freightFrom.associatedCityList"></el-input>
        </el-form-item>

        <el-form-item
          label="首重价格"
          prop="firstWeight"
        >
          <el-input v-model="freightFrom.firstWeight"></el-input>
        </el-form-item>

        <el-form-item
          label="续重价格"
          prop="continuousWeight"
        >
          <el-input v-model="freightFrom.continuousWeight"></el-input>
        </el-form-item>

        <el-form-item
          label="轻抛系数"
          prop="lightThrowingCoefficient"
        >
          <el-input v-model="freightFrom.lightThrowingCoefficient"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="addconfirm"
          >新增</el-button>
          <el-button>取消</el-button>
        </el-form-item>

      </el-form></el-dialog>
  </div>
</template>

<script>
import { freightManageOperate, freightManageList } from '@/api/transit'
export default {
  name: 'FreightAdd',
  props: {
    dialogshow: {
      type: Boolean,
      default: false
    },
    editlist: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      id: 0,
      freightFrom: {
        associatedCityList: [], // 关联城市
        continuousWeight: null, // 续重价格
        firstWeight: null, // 首重价格
        lightThrowingCoefficient: null, // 运费模板id
        templateType: null, // 模板类型
        transportType: null// 运送类型
      },
      rules: {
        associatedCityList: [
          { required: true, message: '请输入关联城市', trigger: 'blur' }
        ],
        continuousWeight: [
          { required: true, message: '请输入续重价格', trigger: 'blur' }
        ],
        firstWeight: [
          { required: true, message: '请输入首重价格', trigger: 'blur' }
        ],
        lightThrowingCoefficient: [
          { required: true, message: '请输入运费模板', trigger: 'blur' }
        ],
        templateType: [
          { required: true, message: '请输入模板类型', trigger: 'blur' }
        ],
        transportType: [
          { required: true, message: '请输入运送类型', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.getll()
  },
  methods: {
    open() {
      this.freightFrom.associatedCityList = this.editlist.associatedCityList
      this.freightFrom.continuousWeight = this.editlist.continuousWeight
      this.freightFrom.firstWeight = this.editlist.firstWeight
      this.freightFrom.lightThrowingCoefficient = this.editlist.lightThrowingCoefficient
      this.freightFrom.templateType = this.editlist.templateType
      this.freightFrom.transportType = this.editlist.transportType
      this.id = this.editlist.id
    },
    close() {
      this.dialogshow = false
      this.$emit('update:dialogshow', false)
      this.freightFrom = {
        associatedCityList: [], // 关联城市
        continuousWeight: null, // 续重价格
        firstWeight: null, // 首重价格
        lightThrowingCoefficient: null, // 运费模板id
        templateType: null, // 模板类型
        transportType: null// 运送类型
      }
    },
    async getll() {
      const res = await freightManageList()
      console.log(1111, res)
    },
    addconfirm() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          if (this.id) {
            await freightManageOperate(this.freightFrom)
            this.$message.success('编辑成功')
          } else {
            await freightManageOperate(this.freightFrom)
            this.$message.success('新增成功')
          }
          this.close()
          this.$emit('update:dialogshow', false)
          this.$emit('add')
        }
      })
    }
  }
}
</script>
