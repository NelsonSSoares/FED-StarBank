// cryptos.service.ts
import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CryptosService {
  private readonly destroyRef = inject(DestroyRef);

  readonly prices = signal<Record<'BTC' | 'ETH' | 'USD' | 'EUR', number>>({
    BTC: 0,
    ETH: 0,
    USD: 0,
    EUR: 0
  });

  readonly directions = signal<Record<'BTC' | 'ETH' | 'USD' | 'EUR', 'up' | 'down' | 'none'>>({
    BTC: 'none',
    ETH: 'none',
    USD: 'none',
    EUR: 'none'
  });

  constructor(private http: HttpClient) {
    this.startFetching();
  }

  private startFetching(): void {
    this.fetchPrices();
    const interval = setInterval(() => this.fetchPrices(), 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  private fetchPrices(): void {
    const symbols = ['BTCUSDT', 'ETHUSDT', 'EURUSDT', 'USDTBRL'];

    symbols.forEach(symbol => {
      this.http.get<any>(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (response) => {
            const newPrice = parseFloat(response.price);
            const prev = this.prices();

            switch (symbol) {
              case 'BTCUSDT':
                this.updatePrice('BTC', prev.BTC, newPrice);
                break;
              case 'ETHUSDT':
                this.updatePrice('ETH', prev.ETH, newPrice);
                break;
              case 'EURUSDT':
                this.updatePrice('EUR', prev.EUR, newPrice);
                break;
              case 'USDTBRL':
                this.updatePrice('USD', prev.USD, newPrice);
                break;
            }
          },
          error: (error) => {
            console.error(`Erro ao buscar ${symbol}:`, error);
          }
        });
    });
  }

  private updatePrice(key: 'BTC' | 'ETH' | 'USD' | 'EUR', oldPrice: number, newPrice: number) {
    this.directions.update(d => ({ ...d, [key]: this.getDirection(oldPrice, newPrice) }));
    this.prices.update(p => ({ ...p, [key]: newPrice }));
  }

  private getDirection(oldPrice: number, newPrice: number): 'up' | 'down' | 'none' {
    if (oldPrice === 0) return 'none';
    return newPrice > oldPrice ? 'up' : newPrice < oldPrice ? 'down' : 'none';
  }
}
