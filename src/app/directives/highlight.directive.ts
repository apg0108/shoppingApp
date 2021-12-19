import { Directive, OnInit, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor !: string;
  @Input() highlightColor !: string;
  @HostBinding('style.backgroundColor') backgroundColor !: string; 
  @HostBinding('style.color') color !: string; 

  constructor() { }

  ngOnInit(){
    this.defaultColor = 'transparent';
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseenter') mouseenter (EventData : Event){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (EventData : Event){
    this.backgroundColor = this.defaultColor;
  }

}
