import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-modal-page',
  imports: [ModalComponent],
  templateUrl: './modal-page.component.html',
  styleUrl: './modal-page.component.css',
})
export class ModalPageComponent {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  modalTitle = 'Example Modal Title';
  modalContent = 'This is the content of the example modal.';

  openModal() {
    this.modalComponent.openModal();
  }

  closeModal() {
    this.modalComponent.closeModal();
  }
}