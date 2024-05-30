export interface productInterface {
  id: number;
  title: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
}

export function formatNumber(number: number) {
  return (Math.round(number * 100) / 100).toFixed(2);
}
