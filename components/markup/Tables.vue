<template>
  <div>
    <h2 class="h2" id="tables">Tables</h2>

    <table cellspacing="0" cellpadding="0">
      <caption>This is a table caption</caption>
      <thead>
        <tr>
          <th>Table Header 1</th>
          <th>Table Header 2</th>
          <th>Table Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr class="even">
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr>
          <td colspan="3">A row with a cell spanning all 3 columns</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Table Footer 1</th>
          <th>Table Footer 2</th>
          <th>Table Footer 3</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>