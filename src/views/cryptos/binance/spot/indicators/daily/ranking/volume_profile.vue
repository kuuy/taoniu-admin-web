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
          <span>{{ row[0] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="控制点" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[1] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价值高点" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[2] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价值低点" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[3] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="控制比" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[4] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="盈利目标" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[5] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="止损点" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[6] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="风险收益比" width="150" header-align="center" align="right">
        <template v-slot="{row}">
          <span>{{ row[7] }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="query.current" :limit.sync="query.pageSize" @pagination="pagenate" />
  </div>
</template>

<script>
import { pagenate } from '@/api/cryptos/binance/spot/indicators/daily/ranking'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: 'RiskReward',
  components: { Pagination },
  directives: { waves },
  filters: {
  },
  data() {
    return {
      tableKey: 0,
      query: {
        symbol: '',
        fields: 'poc,vah,val,poc_ratio,profit_target,stop_loss_point,risk_reward_ratio',
        sort: 'poc_ratio,-1',
        current: 1,
        page_size: 20
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
      pagenate(this.query).then(response => {
        const that = this
        that.data = []
        if (response.data != null) {
          response.data.forEach(function(row) {
            that.data.push(row.split(','))
          })
        }
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
