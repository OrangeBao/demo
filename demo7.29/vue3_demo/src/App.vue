<template>
  <el-table :data="tableData" style="width: 32%">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <hr />
  <el-button
    link
    type="primary"
    size="small"
    @click.prevent="sendData(tableData2)"
    >上传数据到web服务</el-button
  >
  <el-button link type="primary" size="small" @click.prevent="getUsers"
    >请求数据并添加在列表中</el-button
  >
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "App",
  setup() {
    const tableData = ref([
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Jack",
        state: "California",
        city: "Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Mary",
        state: "California",
        city: "Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Alice",
        state: "California",
        city: "Los Angeles",
      },
    ]);

    const deleteRow = (index) => {
      tableData.value.splice(index, 1);
    };

    const sendData = () => {
      axios
        .get("http://localhost:80/sendData", {
          params: {
            date: "2016-05-03",
            name: "newFriend2",
            state: "California",
            city: "Los Angeles",
          },
        })
        .then(
          (response) => {
            console.log(response, "上传数据成功");
          },
          (error) => {
            console.log("上传数据请求失败");
          }
        );
    };

    const getUsers = () => {
      axios.get("http://localhost:80/user").then(
        (response) => {
          tableData.value.push(response.data);
          console.log(response);
        },
        (error) => {
          console.log("请求失败");
        }
      );
    };

    return {
      tableData,
      deleteRow,
      sendData,
      getUsers,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
