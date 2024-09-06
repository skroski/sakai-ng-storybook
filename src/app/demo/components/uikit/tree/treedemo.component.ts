import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeService } from 'src/app/demo/service/node.service';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-treedemo',
    template: `
    <p-tree
        [value]="value"
        selectionMode="single"
        expandedIcon="pi pi-folder"
        [(selection)]="files1"
      ></p-tree>
      `
})
export class TreeDemoComponent implements OnInit {
    @Input() value: TreeNode[] = [];
    @Input() selectionMode: string;

    @Output()
    onClick = new EventEmitter<Event>();

    @Input() files1: TreeNode[] = [];

    files2: TreeNode[] = [];

    files3: TreeNode[] = [];

    selectedFiles1: TreeNode[] = [];

    selectedFiles2: TreeNode[] = [];

    selectedFiles3: TreeNode = {};
    @Input() collapsedIcon: string;
    @Input() expandedIcon: string;
    @Input() fileIcon: string;

    @Input() cols: any[] = [];

    constructor(private nodeService: NodeService, private httpClient: HttpClient) { }

    ngOnInit() {

        this.nodeService.getFiles().then(files => this.value = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => {
            this.files3 = [{
                label: 'Root',
                children: files
            }];
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
        console.log(this.value);

    }

}
