<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
          </el-aside>
          <el-container>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content ep-bg-purple" >1</div></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple" >2</div></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple" >3</div></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple" >4</div></el-col>
                </el-row>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </template>

<style>
    .el-container {
        height: 100vh;
    }
    .el-header {
        text-align: center;
        background-color: aqua;
    }
    .el-aside {
        text-align: center;
        background-color: aquamarine;
    }
    .el-main {
        text-align: center;
        /* background-color: bisque; */
    }
    .el-footer {
        text-align: center;
        background-color:blue
    }
    .ep-bg-purple{
        background-color: purple;
        color:white;
        text-align: center;
        height: 100px;
    }
</style>
  