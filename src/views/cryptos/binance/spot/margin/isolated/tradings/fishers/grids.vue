<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.symbol" placeholder="Symbol" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="query.status" multiple class="filter-item" style="width: 350px;" placeholder="请选择">
        <el-option v-for="(item,index) in statusOptions" :key="index" :label="item" :value="index" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
    </div>

    <el-table
      :key="id"
      v-loading="isLoading"
      :data="data"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="自动编号" width="200" align="center">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="市场代码" width="300" align="center">
        <template v-slot="{row}">
          <span>{{ row.symbol }}</span>
        </template>
      </el-table-column>
      <el-table-column label="买入" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.buy_price }} × {{ row.buy_quantity }}</span>
        </template>
      </el-table-column>
      <el-table-column label="卖出" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.sell_price }} × {{ row.sell_quantity }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="200" align="center">
        <template v-slot="{row}">
          <span>{{ row.created_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" width="200" align="center">
        <template v-slot="{row}">
          <span>{{ row.updated_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" class-name="status-col" align="center" width="100">
        <template v-slot="{row}">
          <span>{{ row.status | statusFilter }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="query.current" :limit.sync="query.pageSize" @pagination="pagenate" />
  </div>
</template>

<script>
import { pagenate } from '@/api/cryptos/binance/spot/margin/isolated/tradings/fishers/grids'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const statusOptions = ['待买入', '已买入', '待卖出', '已完成']

export default {
  name: 'Grids',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusOptions = ['待买入', '已买入', '待卖出', '已完成']
      return statusOptions[status] || ''
    }
  },
  data() {
    return {
      tableKey: 0,
      query: {
        symbol: '',
        status: [],
        current: 1,
        page_size: 20
      },
      total: 0,
      data: [],
      statusOptions,
      isLoading: true,
      showReviewer: false,
      dialogFormVisible: false,
      dialogStatus: '',
      dialogPvVisible: false,
      downloadLoading: false
    }
  },
  created() {
    this.pagenate()
  },
  methods: {
    pagenate() {
      this.isLoading = true
      pagenate(this.query).then(response => {
        this.data = response.data
        this.total = response.total

        setTimeout(() => {
          this.isLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.query.current = 1
      this.pagenate()
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'created_at' || j === 'updated_at') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
