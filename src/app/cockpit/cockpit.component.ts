import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ serveName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serveName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serveName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serveName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
