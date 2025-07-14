import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-crypto-card',
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.scss'
})
export class CryptoCardComponent {
 @Input() name!: string;
  @Input() subtitle!: string;
  @Input() imageSrc!: string;
  @Input() price!: number;
  @Input() currencyLabel!: string; // <-- Adicionado corretamente
  @Input() direction!: 'up' | 'down' | 'none';

  currencySymbols: Record<string, string> = {
    USD: '$',
    BRL: 'R$',
    EUR: '€',
    BTC: '₿',
    ETH: 'Ξ',
  };

  getCurrencySymbol(): string {
    return this.currencySymbols[this.currencyLabel] ?? this.currencyLabel;
  }

  getArrowIcon(): string {
    return {
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      none: 'pause',
    }[this.direction];
  }

  getDirectionClass(): string {
    return {
      up: 'text-green',
      down: 'text-red',
      none: 'text-muted',
    }[this.direction];
  }
}
