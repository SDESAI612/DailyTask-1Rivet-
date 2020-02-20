import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../../dynamic/dynamic';
import { Portal, ComponentPortal, } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.scss'],

})
export class PresentationComponent implements OnInit {
  
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponent>;
  templatePortal: ComponentPortal<DynamicComponent>;

  @ViewChild('messagecontainer',{read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  

  constructor(private resolver:ComponentFactoryResolver, public overlay: Overlay) { }

  ngOnInit() {
  }
 
  public createForm():void 
  {
      this.entry.detach();
      const FACTORY = this.resolver.resolveComponentFactory(DynamicComponent);
      const COMPONENT_REF = this.entry.createComponent(FACTORY)
  }

  public clearForm():void 
  {
    this.entry.clear();
  }

  public createFormCdk():void
  {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.selectedPortal = this.componentPortal;
  }

  public clearFormCdk():void
  {
    this.componentPortal.detach();
  }

  public createFormOverlay(): void
  {
    const CONFIG = new OverlayConfig()
    CONFIG.hasBackdrop=true;
    CONFIG.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay.create(CONFIG);
    const userProfilePortal = new ComponentPortal(DynamicComponent);
    overlayRef.attach(userProfilePortal); 
    overlayRef.backdropClick().subscribe(
      ()=>{
        overlayRef.detach();
      }
    )
    
  }
}
