<template>
  <el-container class="fy-container">

    <el-aside class="fy-aside">
      <div class="fy-logo">
        <i class="el-icon-eleme"></i>
      </div>
      <el-tabs
        tab-position="left"
        class="fy-menu-primary"
      >
        <el-tab-pane>
          <template #label>
            <div class="fy-tab-item-btn">
              <div class="fy-tab-item-icon">
                <i class="el-icon-house"></i>
              </div>
              <div class="fy-tab-item-text">
                首页
              </div>
            </div>
          </template>
          <MenuTitle title="首页"/>
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>总览</template>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <template #title>工作台</template>
            </el-menu-item>
          </el-menu>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <div class="fy-tab-item-btn">
              <div class="fy-tab-item-icon">
                <i class="el-icon-coin"></i>
              </div>
              <div class="fy-tab-item-text">组件</div>
            </div>
          </template>
          <MenuTitle title="组件"/>
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>图标</span>
              </template>
              <el-menu-item index="1-1">综合表格</el-menu-item>
              <el-menu-item index="1-2">行内编辑表格</el-menu-item>

            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>卡片</template>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <template #title>列表</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>打印</template>
            </el-menu-item>
          </el-menu>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <div class="fy-tab-item-btn">
              <div class="fy-tab-item-icon">
                <i class="el-icon-box"></i>
              </div>
              <div class="fy-tab-item-text">物料</div>
            </div>
          </template>
          <MenuTitle title="物料"/>
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>导航四</template>
            </el-menu-item>
            <el-submenu index="5">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <div class="fy-tab-item-btn">
              <div class="fy-tab-item-icon">
                <i class="el-icon-coordinate"></i>
              </div>
              <div class="fy-tab-item-text">
                角色
              </div>
            </div>
          </template>
          <MenuTitle title="角色"/>
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>导航四</template>
            </el-menu-item>
            <el-submenu index="5">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <div class="fy-tab-item-btn">
              <div class="fy-tab-item-icon">
                <i class="el-icon-data-analysis"></i>
              </div>
              <div class="fy-tab-item-text">
                任务
              </div>
            </div>
          </template>
          <MenuTitle title="任务"/>
          <el-menu
              :uniqueOpened="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>导航四</template>
            </el-menu-item>
            <el-submenu index="5">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-tab-pane>
      </el-tabs>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main class="fy-container-content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import MenuTitle from '../components/MenuTitle/index.vue'
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped lang="less">
@import "./style/index";
</style>
