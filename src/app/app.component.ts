import { Component } from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class BasicComponent {
  restrictOneOpen = false;
  accordionTypeEmbed = false;
  menu = [
    {
      title: '数据接入',
      children: [{ title: '点位接入' }, { title: '协议配置' }],
    },
    {
      title: '通信管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '协议管理',
      open: true,
      children: [{ title: 'OPC通讯协议' }, { title: 'Modbus协议管理' }],
    },
    {
      title: '数据处理',
      open: true,
      children: [{ title: '数据存储配置' }, { title: '离线数据处理' }],
    },
    {
      title: '实时数据',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '组态管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '边缘控制',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '状态监控',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '安全管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '日志管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '报警信息',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
    {
      title: '用户管理',
      children: [{ title: '通道1' }, { title: '通道2' }],
    },
  ];

  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
  }
  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          { title: 'Child Content 1' },
          { title: 'Child Content 2' },
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }
  log(...v) {
    console.log(...v);
  }
}
