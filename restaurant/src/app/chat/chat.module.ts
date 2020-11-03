import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ChatComponent]
})
export class ChatPageModule {}
