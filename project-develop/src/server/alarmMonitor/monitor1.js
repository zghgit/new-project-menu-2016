/**
 * Created by Guo Hua on 2018/7/18.
 */

let tableData1 = [
  {field:'t1', title:'日期1', width:'200', align:'center'},
  {field:'t12', title:'日期1', width:'200', align:'center'},
  {field:'t13', title:'日期1', width:'200', align:'center'},
  {field:'t14', title:'日期1', width:'200', align:'right'},
  {field:'t15',title:'日期2', align:'center',children:[
    {field:'t16', title:'日期2', width:'200', align:'left'},
    {field:'t17', title:'日期2', width:'200', align:'left'}
  ]
  }
];

let tableData2 = [
  {field:'t1', title:'日期2', width:'200', align:'center'},
  {field:'t12', title:'日期2', width:'200', align:'center'},
  {field:'t13', title:'日期2', width:'200', align:'center'},
  {field:'t14', title:'日期2', width:'200', align:'center'},
  {field:'t15',title:'日期2', align:'center',children:[
    {field:'t16', title:'日期2', width:'200', align:'left'},
    {field:'t17', title:'日期2', width:'200', align:'left'}
  ]}
];

let tableData3 = [
  {field:'t1', title:'日期2', width:'200', align:'center'},
  {field:'t12', title:'日期2', width:'200', align:'center'},
  {field:'t13', title:'日期2', width:'200', align:'center'},
  {field:'t14', title:'日期2', width:'200', align:'center'},
  {field:'t15',title:'日期2', align:'center',children:[
    {field:'t16', title:'日期2', width:'200', align:'left'},
    {field:'t17', title:'日期2', width:'200', align:'left'}
  ]}
];

let tableData4 = [
  // {field:'arr', title:'明细数据超链接', width:'260', align:'center', aIndex:0},
  {field:'t1', title:'日期', width:'200', align:'center', aIndex:1},
  {field:'t12', title:'股票', width:'200', align:'center', aIndex:2},
  {field:'t13', title:'金额', width:'200', align:'center', aIndex:3, flag:1},
  {field:'t14', title:'代码', width:'200', align:'center', aIndex:4, flag:2},

];

export {
  tableData1,
  tableData2,
  tableData3,
  tableData4
}