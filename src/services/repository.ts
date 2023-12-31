export interface Repository<T extends { id: string | number }> {
  getTotal(): Promise<T[]>;
  create(_item: Omit<T, 'id'>): Promise<T>;
  update(_id: T['id'], _item: Partial<T>): Promise<T>;
  delete(_id: T['id']): Promise<void>;
}

export interface SimpleRepository<T extends { id: string | number }> {
  getAll(number: number): Promise<T[]>;
}
