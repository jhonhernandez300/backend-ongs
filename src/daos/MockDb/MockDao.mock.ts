import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import mongoose from 'mongoose';
import {SalesOrdersSchema} from '../../entities/sales-orders-schema';

interface IDatabase {
    users: IUser[];
}


class MockDaoMock {

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';


    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }

    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }

    protected async connected(connectionString: string) {        
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }

    protected async getAll(CollectionName: string): Promise<any>  {
        const userData = mongoose.model(CollectionName, SalesOrdersSchema, CollectionName);        
        var data = userData.find({});                     
        return data;
    } 
}

export default MockDaoMock;
