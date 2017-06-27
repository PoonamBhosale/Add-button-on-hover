{
    headerName: "",
    field: "deleteflag",
    suppressSorting: true,
    suppressMenu: true,
    cellRenderer: adddeleteCellRenderer,
}


function adddeleteCellRenderer(params) {
  var template;
    if (params.data.deleteflag == false) {
        template = '<md-button ng-click="vm.adddata($event, data, rowNode)" class="myComment"><md-icon md-font-icon="zmdi zmdi-plus-circle-o"></md-icon></md-button>'
    } else {
      template = '<md-button><md-icon md-font-icon="zmdi zmdi-delete"></md-icon></md-button>'
    }
    return template;
}
vm.adddata = adddata;
vm.boxShow = false;
function adddata(ev, data, currrownode) {
    vm.boxShow = true;
    var updatedNodes = [];
    vm.gridOptions.api.forEachNode(function(node) {
        var newdatas = node.data;
        if (node.childIndex == currrownode.childIndex) {
            if (newdatas.deleteflag == false) {
                node.data.deleteflag = true;
            }
        }
        updatedNodes.push(node)
    });
    vm.gridOptions.api.refreshRows(updatedNodes);
}
