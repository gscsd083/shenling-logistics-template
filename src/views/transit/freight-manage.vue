<!-- 运费管理 -->
<template>
  <div class="dashboard-container waybill-list customer-list-box">
    <el-card class="box-card">

      <div
        slot="header"
        class="clearfix"
      >
        <el-button
          type="danger"
          class="bbb"
          @click="changee"
        >新增模板</el-button>
        <el-table
          :data="freightList"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="templateType"
            label="模板类型"
            width="180"
          >
            <template #default="scope">
              {{ mo(scope.row.templateType) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="transportType"
            label="运送类型"
            width="180"
          >
            {{ 1?'普快':'特快' }}
          </el-table-column>
          <el-table-column
            prop="associatedCityList"
            label="关联城市"
          >
            {{ 1?'全国':'区域' }}
          </el-table-column>
          <el-table-column
            prop="firstWeight"
            label="首重"
          >
          </el-table-column>
          <el-table-column
            prop="continuousWeight"
            label="续重"
          >
          </el-table-column>
          <el-table-column
            prop="lightThrowingCoefficient"
            label="轻抛系数"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            width="100px"
            #default="de"
          >
            <el-button
              type="text"
              @click="edit(de.row)"
            >编辑</el-button>
            <el-button
              type="text"
              @click="del(de.row.id)"
            >删除</el-button>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <div>
      <freightAdd
        :dialogshow.sync="dialogshow"
        :editlist="editlist"
        @add="getlist"
      ></freightAdd>
    </div>
  </div>
</template>

<script>
import { freightManageList, freightManageDelete } from '@/api/transit'
import freightAdd from '@/views/transit/components/freight-add.vue'
export default {
  name: 'FreightManage',
  components: {
    freightAdd
  },
  data() {
    return {
      freightList: [],
      editlist: {},
      dialogshow: false
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    async getlist() {
      const res = await freightManageList()
      this.freightList = res.data
    },
    changee() {
      this.dialogshow = true
    },
    mo(sc) {
      if (sc === 1) {
        return '同城寄'
      } else if (sc === 2) {
        return '省内寄'
      } else if (sc === 3) {
        return '经济区互寄'
      } else {
        return '跨省'
      }
    },
    async del(id) {
      await freightManageDelete(id)
      this.$message.success('删除成功')
      this.getlist()
    },
    edit(row) {
      this.editlist = row
      this.dialogshow = true
    }
  }

}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
.waybill-list {
  .el-dialog__wrapper {
    /deep/ .el-dialog__body {
      padding-left: 0px;
    }
  }
}
.text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    padding: 50px;
    margin: 30px;
    width: 100%;
  }
  .clearfix{
    font-size: 20px;
  }
  .bbb{
    margin-bottom: 50px;
  }
</style>
