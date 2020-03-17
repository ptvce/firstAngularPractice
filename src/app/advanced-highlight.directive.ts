import { Directive, ElementRef, OnInit, Input, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {

  @Input() defaultColor: string = "yellow";
  @HostBinding("style.color") c: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.elRef.nativeElement.style.backgroundColor = this.defaultColor; // is in dom
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color",this.defaultColor);  // is not in dom
    this.elRef.nativeElement.style.color = "black";
  }

  @HostListener("mouseenter") me() {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.defaultColor);  // is not in dom
  }
  @HostListener("mouseleave") ml() {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");  // is not in dom
    //this.renderer.setStyle(this.elRef.nativeElement, "color", "black");
    this.c = "black";
  }


}
