
const { dialog, app } = require('electron').remote
async function openUploadDialog(){
  const res = dialog.showOpenDialogSync({
    title: '请选择csv文件',
    // 默认打开的路径，比如这里默认打开下载文件夹
    defaultPath: app.getPath('downloads'),
    buttonLabel: '确认',
    // 限制能够选择的文件类型
    filters: [
      { name: 'Files', extensions: ['csv'] },
    ],
    properties: [ 'openFile', 'openDirectory'],
    message: '请选择csv文件'
  })
  if(res.length > 0) {
    dialog.showMessageBoxSync({
      type: 'info',
      title: '这里是标题',
      message: '文件路径',
      detail: res[0]
    })
  }
  console.log(res)
}
