<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.symbol" placeholder="Symbol" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
      <el-table-column label="市场代码" width="200" align="center">
        <template v-slot="{row}">
          <span>{{ row.symbol }}</span>
        </template>
      </el-table-column>
      <el-table-column label="开盘" width="200" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.open }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="200" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最高" width="200" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.high }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最低" width="200" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.low }}</span>
        </template>
      </el-table-column>
      <el-table-column label="成交量" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.volume }}</span>
        </template>
      </el-table-column>
      <el-table-column label="成交额" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row.quota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="刷新时间" width="200" align="center">
        <template v-slot="{row}">
          <span>{{ row.timestamp | parseTime() }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="query.current" :limit.sync="query.pageSize" @pagination="pagenate" />
  </div>
</template>

<script>
import { live } from '@/api/cryptos/binance/spot/markets'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: 'Live',
  components: { Pagination },
  directives: { waves },
  filters: {
  },
  data() {
    return {
      tableKey: 0,
      query: {
        symbol: '',
        current: 1,
        pageSize: 20
      },
      total: 0,
      data: [],
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
      live(this.query).then(response => {
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
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
