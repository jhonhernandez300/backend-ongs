import { ISalesOrders } from '@entities/sales-orders';

export interface ISalesOrdersDao {
    //getOne: (email: string) => Promise<IOng | null>;
    getAll: () => Promise<ISalesOrders[]>;
    // add: (user: IOng) => Promise<void>;
    // update: (user: IOng) => Promise<void>;
    // delete: (id: string) => Promise<string>;    
}

class SalesOrdersDao implements ISalesOrdersDao {

    public getOne(email: string): Promise<ISalesOrders | null> {
        return Promise.resolve(null);
    }

    public getAll(): Promise<ISalesOrders[]> {
        return Promise.resolve([]);
    }



}

export default SalesOrdersDao;