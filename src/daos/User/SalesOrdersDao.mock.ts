import '../../pre-start'; // Must be the first import
import { ISalesOrders } from '@entities/sales-orders';
import { getRandomInt } from '@shared/functions';
import { ISalesOrdersDao } from './SalesOrdersDao';
import MockDaoMock from '../MockDb/MockDao.mock';
import mongoose from 'mongoose';

class SalesOrdersDao extends MockDaoMock implements ISalesOrdersDao {

    public async getAll(): Promise<ISalesOrders[]> {
        try { 
            super.connected(process.env.CONNECTION || '');                      
        } catch (err) {             
            console.log( err );             
        }
        return await super.getAll('SalesOrders');
    }

    

}

export default SalesOrdersDao;