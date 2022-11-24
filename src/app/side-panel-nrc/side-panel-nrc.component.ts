import { ApplicationRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-panel-nrc',
  templateUrl: './side-panel-nrc.component.html',
  styleUrls: ['./side-panel-nrc.component.css']
})

export class SidePanelNrcComponent implements OnInit {
  // filmIcon = faFilm;
  @ViewChild('sidebar') myDiv: ElementRef;
  collapse = true;

  constructor() { 
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

  closeNav() {
    console.log("here", this.myDiv.nativeElement.innerHTML)
    var p = this.myDiv.nativeElement;
    console.log("p is", p)
    if (p) {
      p.style.width = "0";
      p.style.minWidth = "0";
      p.style.maxWidth = "0";
    }
    var q = document.getElementById("main")
    if (q) {
      q.style.marginLeft= "0";
    }
  }
}

